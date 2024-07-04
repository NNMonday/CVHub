// repositories/jobsRepository.js

import Company from "../model/Company.js";


export const findJobSeekerByUserId = async (userId) => {
  try {
    const jobSeeker = await JobSeekersSchema.findOne({ user_Id: userId });
    return jobSeeker;
  } catch (error) {
    throw error;
  }
};
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

  const getCompanyById = async (companyId) => {
    try {
      const company = await Company.findById(companyId)
        .populate({
          path: "user_Id",
          select: "avatar email" ,
        })
        .select("company_name website description employee_quantity email user_Id");
  
      if (!company) {
        return null;
      }
  
      const result = {
        company_name: company.company_name,
        website: company.website,
        description: company.description,
        employee_quantity: company.employee_quantity,
        email: company.user_Id?.email,
        avatar: company.user_Id?.avatar,
      };
  
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get job seeker by ID");
    }
  };

export default {
    getAllCompanies,
    searchCompaniesByName,
    getCompanyById,
    findJobSeekerByUserId
};
