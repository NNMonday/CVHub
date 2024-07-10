import usersRepository from "../repository/users.js";
import bcrypt from "bcrypt";

const changePassword = async (req, res) => {
  try {
    const { id, currentPassword, newPassword } = req.body;
    console.log(req.body);
    const user = await usersRepository.findById(id);

    // Kiểm tra mật khẩu hiện tại
    const isMatch = bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect current password" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Lưu mật khẩu mới vào cơ sở dữ liệu
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change password error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const uploadAvatar = async (req, res) => {
  try {
    const { id } = req.params;
    const { avatar } = req.body;

    if (!avatar) {
      return res.status(400).json({ error: "Avatar URL is required" });
    }

    const user = await usersRepository.findByIdAndUpdate(id, avatar);
    console.log("user: ", user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "Avatar uploaded successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  changePassword,
  uploadAvatar,
};
