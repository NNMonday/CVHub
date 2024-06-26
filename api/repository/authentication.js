import Users from "../model/Users.js";
import jwt from "jsonwebtoken";

const authenticate = async () => {
  try {
    return { data: "hahaha" };
  } catch (error) {
    throw new Error(error.toString());
  }
};

const addUser = async ({ email, hashedPassword, location, avatar, role_id }) => {
  try {
    const existingUser = await Users.findOne({ email: email }).exec();
    if (existingUser) {
      throw new Error("The email has already been registered !!");
    }
    const result = await Users.create({
      email: email,
      password: hashedPassword,
      location: location,
      avatar: avatar,
      role_id: role_id,
    });
    return result._doc;
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyUser = async (userId) => {
  try {
    const unverifiedUser = await Users.findById(userId).exec();
    if (!unverifiedUser) {
      throw new Error("Not found!!");
    }
    if (unverifiedUser.verify) {
      throw new Error("The user has already been verified!!");
    }
    const result = await Users.findOneAndUpdate(
      { _id: userId },
      { $set: { verify: true } },
      { new: true }
    );
    if (!result) {
      throw new Error("Something went wrong:(");
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserById = async (userId) => {
  try {
    const existingUser = await Users.findById(userId)
      .populate({ path: "user_Id", model: "users", select: "avatar" })
      .exec();
    if (!existingUser) {
      throw new Error("Not found!!");
    }
    return existingUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const existingUser = await Users.findOne({ email: email })
    // .populate({
    //   path: "jobSekkers_followed",
    //   select: "_id fullname",
    //   populate: { path: "userId", select: "avatar" },
    // })
    // .exec();
    return existingUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findByEmail = async (email) => {
  return await Users.findOne({ email: email }).exec();
};

const generateResetToken = async (userId) => {
  return jwt.sign({ userId }, process.env.RESET_TOKEN_SECRET, { expiresIn: '1h' });
};

export default {
  authenticate,
  addUser,
  verifyUser,
  getUserById,
  getUserByEmail,
  findByEmail,
  generateResetToken,
};
