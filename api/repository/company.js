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
const getAllCompanies = async (req) => {
  try {
    const { company_name, location, organization_type, pagesize, currentpage } = req.body
    let query = {
      company_name: { $regex: company_name, $options: "i" },
      location: { $regex: location, $options: "i" }
    }
    if (!!organization_type) {
      query = {
        ...query,
        organization_type: organization_type
      }
    }
    const companies = Company
      .find(query)
      .skip((currentpage - 1) * pagesize)
      .limit(pagesize)
    const total = Company.countDocuments(query)
    const results = await Promise.all([companies, total])
    return {
      list: results[0],
      total: results[1]
    };
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
        select: "avatar email",
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
