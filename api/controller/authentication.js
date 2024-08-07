import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendConfirmEmail } from "../utils/mailTransport.js";
import jwksClient from "jwks-rsa";
import emailTemplate from "../utils/emailTemplate.js";
import { AuthenticateRepository } from "../repository/index.js";
import { io } from "../server.js"; //s
import Company from "../model/Company.js";
import JobSeekersSchema from "../model/JobSeekers.js";
const client = jwksClient({
  jwksUri: "https://www.googleapis.com/oauth2/v3/certs",
  requestHeaders: {
    "user-agent": "some-user-agent",
  },
  timeout: 30000, // Defaults to 30s
});

const checkEmailExists = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await AuthenticateRepository.getUserByEmail(email);
    if (existingUser) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getKey = async (header, callback) => {
  try {
    const key = await client.getSigningKey(header.kid);
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  } catch (error) {
    callback(error);
  }
};
const authenticate = async (req, res) => {
  try {
    const result = await AuthenticateRepository.authenticate();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, password, confirmPassword, location, avatar, role_id } =
      req.body;

    if (email.length == 0 || password.length == 0 || role_id.length == 0) {
      return res
        .status(400)
        .json({ error: "Please fill out all the mandatory fields" });
    }

    if (confirmPassword !== password) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await AuthenticateRepository.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email is taken" });
    }

    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUND));
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await AuthenticateRepository.addUser({
      email,
      hashedPassword,
      location,
      avatar,
      role_id,
    });

    if (role_id === "66713822005995ca56828d32") {
      await Company.create({ user_id: newUser._id });
    } else {
      await JobSeekersSchema.create({ user_id: newUser._id });
    }
    await sendConfirmEmail(email, newUser._id);

    return res.status(201).json({
      message:
        "Sign up successfully, go to your email to confirm signing up. The email will expire in an hour",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const verifyUser = async (req, res) => {
  try {
    const token = req.params.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { userId } = decodedToken;

    localStorage.setItem("token", userId);

    const result = await AuthenticateRepository.verifyUser(userId);
    if (!result) {
      return res
        .status(400)
        .json({ error: "User not found or already verified" });
    }

    const accessToken = jwt.sign(
      { userId: userId },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    const refreshToken = jwt.sign(
      { userId: userId },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1w",
      }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    return res
      .status(200)
      .json({ message: "Verification successful", data: result });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "Verify token expired, go to sign in page to send new email",
      });
    }

    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const existingUser = await AuthenticateRepository.getUserByEmail(
      req.body.email
    );
    if (!existingUser) {
      return res.status(400).json({ error: "Email not found" });
    }
    const passwordMatch = bcrypt.compareSync(
      req.body.password,
      existingUser.password
    );
    if (!passwordMatch) {
      return res.status(400).json({ error: "Bad Credential" });
    }
    if (!existingUser.verify) {
      return res.status(400).json({ error: "The account is not verified!" });
    }
    const socket = io.sockets.sockets.get(req.body.socketId);
    if (socket) {
      socket.userId = existingUser._id.toString();
      console.log("user socket has been asigned with userId");
    } else {
      console.log("something went wrong");
    }
    io.sockets.sockets.forEach((sk) => {
      console.log(`socket ${sk.id} userId ${sk?.userId}`);
    });
    const accessToken = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    const refreshToken = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1w",
      }
    );
    const { createdAt, updatedAt, password, ...filterdUser } = existingUser;
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    return res
      .status(200)
      .json({ message: "Login successfully! Welcome back", data: filterdUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const mobileLogin = async (req, res) => {
  try {
    const existingUser = await AuthenticateRepository.getUserByEmail(
      req.body.email
    );
    if (!existingUser) {
      return res.status(400).json({ error: "Email not found" });
    }
    const passwordMatch = bcrypt.compareSync(
      req.body.password,
      existingUser.password
    );
    if (!passwordMatch) {
      return res.status(400).json({ error: "Bad Credential" });
    }
    if (!existingUser.verify) {
      return res.status(400).json({ error: "The account is not verified!" });
    }
    const accessToken = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    const refreshToken = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1w",
      }
    );
    const { createdAt, updatedAt, password, ...filteredUser } =
      existingUser._doc;
    // Instead of setting cookies or including tokens in the response body,
    // send tokens in the response headers
    res.setHeader("accessToken", accessToken);
    res.setHeader("refreshToken", refreshToken);
    return res.status(200).json({
      message: "Login successfully! Welcome back",
      data: filteredUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const decodedToken = req.decodedToken;
    const user = await AuthenticateRepository.getUserById(decodedToken.userId);
    const { password, createdAt, updatedAt, ...filterdUser } = user._doc;
    return res.status(200).json({ data: filterdUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return res
        .status(401)
        .json({ error: "No cookie for refreshToken was provided" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const existingUser = await AuthenticateRepository.getUserById(
      decodedToken.userId
    );
    const { createdAt, updatedAt, password, ...filteredUser } =
      existingUser._doc;
    const accessToken = jwt.sign(
      { userId: decodedToken.userId },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    return res.status(200).json({
      message: "accessToken has been succesfully refreshed!",
      data: filteredUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    return res.status(200).json({ message: "Logged Out" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const oauth2GoogleAuthentication = async (req, res) => {
  try {
    const oauth2Result = await req.user;
    if (oauth2Result && oauth2Result.error) {
      return res.status(400).json({ error: oauth2Result.error });
    }
    const accessToken = jwt.sign(
      { userId: oauth2Result._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    const refreshToken = jwt.sign(
      { userId: oauth2Result._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1w",
      }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      sameSite: "lax",
      secure: false,
    });
    // res.json({ message: "Login Successful, welcome back", data: oauth2Result });
    return res.redirect("http://localhost:3000/oauth2Redirect");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const googleLogin = async (req, res) => {
  try {
    const token = req.body.token;
    if (!token) {
      return res
        .status(400)
        .json({ error: "No Token was provided, please try again" });
    }
    jwt.verify(
      token,
      getKey,
      { algorithms: ["RS256"] },
      async (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ error: "Invalid token" });
        }

        try {
          const existingUser = await AuthenticateRepository.getUserByEmail(
            decodedToken.email
          );
          if (!existingUser) {
            return res.status(400).json({ error: "Email not found" });
          }
          const accessToken = jwt.sign(
            { userId: existingUser._id },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "1hr",
            }
          );

          const refreshToken = jwt.sign(
            { userId: existingUser._id },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "1w",
            }
          );

          const { createdAt, updatedAt, password, ...filteredUser } =
            existingUser._doc;

          res.cookie("accessToken", accessToken, {
            httpOnly: true,
            path: "/",
            expires: new Date(Date.now() + 60 * 60 * 1000),
            sameSite: "lax",
            secure: false,
          });

          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            path: "/",
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            sameSite: "lax",
            secure: false,
          });

          return res.status(200).json({
            message: "Login successfully! Welcome back",
            data: filteredUser,
          });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      }
    );
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const sendResetLink = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await AuthenticateRepository.findByEmail(email);
    if (!user) {
      // toast.error("Email not found. Please enter a valid email.");
      return res.status(400).json({ error: "Email not found" });
    }

    // Generate a random password
    const newPassword = generateRandomPassword();

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Save the hashed password to the user in the database
    user.password = hashedPassword;
    await user.save();

    // Send the new password via emailsendNewPasswordEmail(user.email, newPassword)
    await emailTemplate.sendNewPasswordEmail(user.email, newPassword);

    return res.status(200).json({
      message: "New password sent successfully! Please check your email.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
const generateRandomPassword = () => {
  // Generate a random string with specified length
  const length = 10;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let newPassword = "";
  for (let i = 0; i < length; i++) {
    newPassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return newPassword;
};

export default {
  authenticate,
  signUp,
  verifyUser,
  login,
  getUserInfo,
  refreshToken,
  logOut,
  oauth2GoogleAuthentication,
  googleLogin,
  sendResetLink,
  mobileLogin,
  checkEmailExists,
};
