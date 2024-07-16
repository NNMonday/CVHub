require("dotenv").config();
const express = require("express");
const httpErrors = require("http-errors");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./database");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");

const app = express();
db.connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(async (req, res, next) => {
  next(httpErrors.NotFound());
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    errors: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(
    `Server is running at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});
