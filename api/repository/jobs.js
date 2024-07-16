import mongoose from "mongoose";
import Jobs from "../model/Jobs.js";

// Get all jobs
const getAllJobs = async () => {
  try {
    const jobs = await Jobs.find()
      .populate({
        path: "workstatus_id",
        model: "workStatus",
        select: "workStatus_name",
      })
      .populate({
        path: "user_id",
        model: "users",
        select: "avatar",
      });
    return jobs;
  } catch (error) {
    throw new Error(`Failed to fetch jobs: ${error.message}`);
  }
};
// đoạn này k

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
          as: "workstatus",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "users",
        },
      },
      {
        $lookup: {
          from: "fields",
          localField: "fields_id",
          foreignField: "_id",
          as: "fields",
        },
      },
      {
        $lookup: {
          from: "skills",
          localField: "required_skills_id",
          foreignField: "_id",
          as: "skills",
        },
      },
      {
        $lookup: {
          from: "companys",
          localField: "user_id",
          foreignField: "user_id",
          as: "company",
        },
      },
      {
        $unwind: {
          path: "$workstatus",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$users",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$fields",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $unwind: {
          path: "$company",
          preserveNullAndEmptyArrays: true,
        },
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
              name: "$workstatus.workStatus_name",
            },
          },
          required_experience: {
            $first: "$required_experience",
          },
          deadline: { $first: "$deadline" },
          description: { $first: "$description" },
          applicant_requirements: {
            $first: "$applicant_requirements",
          },
          benefits: { $first: "$benefits" },
          email: { $first: "$users.email" },
          fields: {
            $first: {
              _id: "$fields._id",
              name: "$fields.name",
            },
          },
          skills: { $first: "$skills.name" }, // Sử dụng $addToSet để tránh các skill trùng lặp
          company: { $first: "$company" },
        },
      },
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
          name: { $regex: name, $options: "i" },
        },
      },
      {
        $lookup: {
          from: "locations",
          localField: "location_id",
          foreignField: "_id",
          as: "location",
        },
      },
      {
        $unwind: {
          path: "$location",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $match: {
          "location.location_name": locationName,
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          salary: 1,
          deadline: 1,
          location: "$location.location_name",
        },
      },
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
          as: "field",
        },
      },
      {
        $unwind: "$field", // Unwind the field array
      },
      {
        $group: {
          _id: "$fields_id",
          fields_name: { $first: "$field.name" },
          icon: { $first: "$field.icon" }, // Include the icon field
          job_count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 1,
          fields_name: 1,
          icon: 1, // Project the icon field
          job_count: 1,
        },
      },
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
          as: "workStatus",
        },
      },
      {
        $unwind: "$workStatus", // Giải nén mảng workStatus
      },
      {
        $group: {
          _id: "$workstatus_id",
          workStatus_name: { $first: "$workStatus.workStatus_name" },
        },
      },
      {
        $project: {
          _id: 1,
          workStatus_name: 1,
        },
      },
    ]);

    return jobWorkStatus;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default {
  getAllJobs,
  getJobById,
  searchJobsByNameAndLocation,
  getJobCountByFieldId,
  getWorkStatusByJobId,
};
