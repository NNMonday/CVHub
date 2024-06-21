// repositories/jobsRepository.js

import Company from "../model/Company.js";

// Get all jobs
const getAllCompanies = async () => {
    try {
      const companies = await Company.find();
      return companies;
    } catch (error) {
      throw new Error(`Failed to fetch companies: ${error.message}`);
    }
  };


export default {
    getAllCompanies,

};
