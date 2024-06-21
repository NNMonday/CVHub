import Location from '../model/Locations.js';

const getAllLocations = async () => {
  try {
    const locations = await Location.find({});
    return locations;
  } catch (error) {
    throw new Error('Failed to fetch locations: ' + error.message);
  }
};


export default {
    getAllLocations
  };
