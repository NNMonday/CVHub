import locationRepository from '../repository/locations.js';

const getAllLocations = async (req, res) => {
  try {
    const locations = await locationRepository.getAllLocations();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export default {
    getAllLocations,
  
};
