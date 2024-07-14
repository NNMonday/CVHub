import express from "express";
import userController from "../controller/users.js";
import verifyToken from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.put("/change-password", verifyToken, userController.changePassword);
userRouter.put("/upload-avatar/:id", verifyToken, userController.uploadAvatar);

export default userRouter;
