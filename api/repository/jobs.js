// repositories/jobsRepository.js

import Jobs from "../model/Job.js";

// Get all jobs
const getAllJobs = async () => {
  try {
    const jobs = await Jobs.find();
    return jobs;
  } catch (error) {
    throw new Error(`Failed to fetch jobs: ${error.message}`);
  }
};

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
          name: { $regex: name, $options: 'i' } // Tìm kiếm theo tên job, không phân biệt hoa thường
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
          preserveNullAndEmptyArrays: true // Giữ lại các job không có location_id tương ứng
        }
      },
      {
        $match: {
          'location.location_name': locationName // Lọc theo location_name
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          salary: 1,
          deadline: 1,
          location: '$location.location_name' // Trường location sẽ là location_name từ collection locations
        }
      }
    ]);

    return foundJobs;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getAllJobs,
  getJobById,
  searchJobsByNameAndLocation
};
