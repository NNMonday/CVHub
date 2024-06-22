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


  const searchCompaniesByName = async (name) => {
    try {
      const foundCompanies = await Company.aggregate([
        {
          $match: {
            company_name: { $regex: name, $options: 'i' } // Tìm kiếm tên công ty (không phân biệt chữ hoa thường)
          }
        },
        {
          $project: {
            _id: 1,
            company_name: 1,
            industry: 1
          }
        }
      ]);
  
      return foundCompanies;
    } catch (error) {
      throw new Error(error.message);
    }
  };

export default {
    getAllCompanies,
    searchCompaniesByName
};
