import Role from '../model/Roles.js';

const getAllRoles = async () => {
  try {
    return await Role.find({});
  } catch (error) {
    throw new Error('Error fetching roles');
  }
};


export default {
    getAllRoles
  };
