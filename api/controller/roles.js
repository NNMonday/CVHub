import roleRepository from '../repository/roles.js';

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleRepository.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

export const getRoleById = async (req, res) => {
  const { roleId } = req.params;
  try {
    const role = await roleRepository.findRoleById(roleId);

    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }

    res.json({ role });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
export default {
  getAllRoles,
  getRoleById
};
