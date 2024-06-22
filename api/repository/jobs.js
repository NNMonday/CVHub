import mongoose from "mongoose";

import Jobs from "../model/Job.js";
import fields from "./fields.js";

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
const getJobById = async (id) => {
  try {
    const job = await Jobs.findById(id);
    return job;
  } catch (error) {
    throw new Error(`Failed to fetch job with ID ${id}: ${error.message}`);
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

export default {
  getAllJobs,
  getJobById,
  searchJobsByNameAndLocation,
  getJobCountByFieldId,
  getWorkStatusByJobId
};
