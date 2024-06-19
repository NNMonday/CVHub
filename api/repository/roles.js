import Role from '../model/Roles.js';

const getAllRoles = async () => {
  try {
    return await Role.find({});
  } catch (error) {
    throw new Error('Error fetching roles');
  }
};

export const findRoleById = async (roleId) => {
  try {
    const role = await Role.findById(roleId);
    return role;
  } catch (error) {
    console.error("Error finding role by ID:", error);
    throw error;
  }
};
export default {
    getAllRoles,findRoleById
  };
