import roleRepository from '../repository/roles.js';

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleRepository.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

export default {
  getAllRoles
};
