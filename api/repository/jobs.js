
import mongoose from 'mongoose';
import Jobs from "../model/Jobs.js";
import SkillsSchema from '../model/Skills.js';



// Get all jobs
const getAllJobs = async () => {
  try {
    const jobs = await Jobs.find().populate({
      path: 'workstatus_id',
      model: 'workStatus',
      select: 'workStatus_name',
    });
    return jobs;
  } catch (error) {
    throw new Error(`Failed to fetch jobs: ${error.message}`);
  }
};// đoạn này k

// Get job by ID
const getJobById = async (jobId) => {
  
  try {
    const job = await Jobs.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(jobId) } },
      {
        $lookup: {
          from: "workStatus",
          localField: "workstatus_id",
          foreignField: "_id",
          as: "workstatus"
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "users"
        }
      },
      {
        $lookup: {
          from: "fields",
          localField: "fields_id",
          foreignField: "_id",
          as: "fields"
        }
      },
      {
        $lookup: {
          from: "skills",
          localField: "required_skills_id",
          foreignField: "_id",
          as: "skills"
        }
      },
      {
        $lookup: {
          from: "companys",
          localField: "user_id",
          foreignField: "user_id",
          as: "company"
        }
      },
      {
        $unwind: {
          path: "$workstatus",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$users",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$fields",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $unwind: {
          path: "$company",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          salary: { $first: "$salary" },
          quantity: { $first: "$quantity" },
          workstatus: {
            $first: {
              _id: "$workstatus._id",
              name: "$workstatus.workStatus_name"
            }
          },
          required_experience: {
            $first: "$required_experience"
          },
          deadline: { $first: "$deadline" },
          description: { $first: "$description" },
          applicant_requirements: {
            $first: "$applicant_requirements"
          },
          benefits: { $first: "$benefits" },
          email:{ $first: "$users.email" },
          fields: {
            $first: {
              _id: "$fields._id",
              name: "$fields.name"
            }
          },
          skills: { $first: "$skills.name" }, // Sử dụng $addToSet để tránh các skill trùng lặp
          company: { $first: "$company" }
        }
      }
    ]);

    return job[0]; // Trả về kết quả đầu tiên, vì kết quả aggregate là một mảng
  } catch (error) {
    throw new Error(`Failed to fetch job with ID ${jobId}: ${error.message}`);
  }
};



const searchJobsByNameAndLocation = async (name, locationName) => {
  try {
    const foundJobs = await Jobs.aggregate([
      {
        $match: {
          name: { $regex: name, $options: 'i' }
        }
      },
      {
        $lookup: {
          from: 'locations',
          localField: 'location_id',
          foreignField: '_id',
          as: 'location'
        }
      },
      {
        $unwind: {
          path: '$location',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $match: {
          'location.location_name': locationName
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          salary: 1,
          deadline: 1,
          location: '$location.location_name'
        }
      }
    ]);

    return foundJobs;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getJobCountByFieldId = async () => {
  try {
    const jobCounts = await Jobs.aggregate([
      {
        $lookup: {
          from: "fields",
          localField: "fields_id",
          foreignField: "_id",
          as: "field"
        }
      },
      {
        $unwind: "$field" // Giải nén mảng workStatus
      },
      {
        $group: {
          _id: "$fields_id",
          fields_name: { $first: "$field.name" },
          job_count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 1,
          fields_name: 1,
          job_count: 1
        }
      }
    ]);

    return jobCounts;
  } catch (error) {
    throw new Error(error.message);
  }
};



const getWorkStatusByJobId = async (jobsId) => {
  try {
    const jobWorkStatus = await Jobs.aggregate([
      {
        $lookup: {
          from: "workStatus",
          localField: "workstatus_id",
          foreignField: "_id",
          as: "workStatus"
        }
      },
      {
        $unwind: "$workStatus" // Giải nén mảng workStatus
      },
      {
        $group: {
          _id: "$workstatus_id",
          workStatus_name: { $first: "$workStatus.workStatus_name" },
        }
      },
      {
        $project: {
          _id: 1,
          workStatus_name: 1,
        }
      }
    ]);

    return jobWorkStatus;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getJobsAppliedByUser = async (userId) => {
  try {
    // Giả sử có một collection tên là 'applications' lưu trữ thông tin ứng tuyển của user đến các job
    // và 'user_id' là trường trong 'applications' tham chiếu đến user, 'job_id' tham chiếu đến job
    const appliedJobs = await Jobs.aggregate([
      {
        $lookup: {
          from: "applications", // Tên collection chứa thông tin ứng tuyển
          localField: "_id", // Trường trong Jobs
          foreignField: "job_id", // Trường trong Applications
          as: "applications"
        }
      },
      {
        $unwind: "$applications" // Giải nén mảng applications
      },
      {
        $match: {
          "applications.user_id": new mongoose.Types.ObjectId(userId) // Lọc theo userId
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          company: 1, // Giả sử bạn muốn hiển thị thông tin công ty
          // Thêm các trường thông tin bạn muốn hiển thị
        }
      }
    ]);

    return appliedJobs;
  } catch (error) {
    throw new Error(`Failed to fetch applied jobs for user ${userId}: ${error.message}`);
  }
};

const insertJob = async (req, res) => {
  try {
    const { jobTitle, tags, jobRole, minSalary, maxSalary, salaryType, education, experience, jobType, vacancies, expirationDate, jobLevel, applyJobOn, description, responsibilities } = req.body;

    // Ensure all required fields are present
    if (!jobTitle || !minSalary || !maxSalary || !salaryType || !education || !experience || !jobType || !vacancies || !expirationDate || !jobLevel || !applyJobOn || !description || !responsibilities) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newJob = new Jobs({
      name: jobTitle,
      tags,
      jobRole,
      minSalary,
      maxSalary,
      salaryType,
      education,
      experience,
      jobType,
      vacancies,
      expirationDate,
      jobLevel,
      applyJobOn,
      description,
      responsibilities,
      required_skills_id: [], // You might want to handle required skills differently
    });

    const newJobSave = await newJob.save();
    
    return res.json(newJobSave);
  } catch (error) {
    console.error(`Failed to insert job: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

const getFavoriteJobsByUserId = async (userId) => {
  try {
    // Giả sử có một collection tên là 'favoriteJobs' lưu trữ thông tin công việc yêu thích
    // và 'user_id' là trường trong 'favoriteJobs' tham chiếu đến user
    const favoriteJobs = await Jobs.aggregate([
      {
        $lookup: {
          from: "favoriteJobs", // Tên collection chứa thông tin công việc yêu thích
          localField: "_id", // Trường trong Jobs
          foreignField: "job_id", // Trường trong favoriteJobs
          as: "favoriteInfo"
        }
      },
      {
        $unwind: "$favoriteInfo" // Giải nén mảng favoriteInfo
      },
      {
        $match: {
          "favoriteInfo.user_id": new mongoose.Types.ObjectId(userId) // Lọc theo userId
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          // Thêm các trường thông tin bạn muốn hiển thị
        }
      }
    ]);

    return favoriteJobs;
  } catch (error) {
    throw new Error(`Failed to fetch favorite jobs for user ${userId}: ${error.message}`);
  }
};


export default {
  getAllJobs,
  getJobById,
  searchJobsByNameAndLocation,
  getJobCountByFieldId,
  getWorkStatusByJobId,
  insertJob,
  getJobsAppliedByUser,
  getFavoriteJobsByUserId
};
