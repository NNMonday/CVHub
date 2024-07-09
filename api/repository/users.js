import User from "../model/Users.js";

const findById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findByIdAndUpdate = async (id, avatar) => {
  try {
    return await User.findByIdAndUpdate(id, { avatar }, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  findById,
  findByIdAndUpdate,
};
