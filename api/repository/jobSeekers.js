  import JobSeekersSchema from '../model/JobSeekers.js';


  // Function to find job seeker by user ID
  export const findJobSeekerByUserId = async (userId) => {
    try {
      const jobSeeker = await JobSeekersSchema.findOne({ user_Id: userId });
      return jobSeeker;
    } catch (error) {
      throw error;
    }
  };
  export const checkSavedJob = async (userId, jobId, action) => {
    try {
      let updateOperation;
      if (action === 'add') {
        updateOperation = { $push: { savedJobs: jobId } };
      } else if (action === 'remove') {
        updateOperation = { $pull: { savedJobs: jobId } };
      } else {
        throw new Error('Invalid action. Use "add" or "remove".');
      }
      const jobSeeker = await JobSeekersSchema.findOneAndUpdate(
        { user_Id: userId },
        updateOperation,
        { new: true }
      ).populate('savedJobs');
      return jobSeeker;
    } catch (error) {
      throw error;
    }
  };
  
  export const getAllSavedJobs = async (userId) => {
    try {
      const jobSeeker = await findJobSeekerByUserId(userId);
      if (!jobSeeker) {
        throw new Error('Job seeker not found');
      }
  
      // Check if jobSeeker.savedJobs exists and is an array
      if (!jobSeeker.savedJobs || !Array.isArray(jobSeeker.savedJobs)) {
        throw new Error('Saved jobs not found or invalid format');
      }
  
      // Return the list of job IDs from savedJobs
      return jobSeeker.savedJobs.map(job => job.toString());
    } catch (error) {
      throw error;
    }
  };

  const getJobSeekerById = async (jobSeekerId) => {
    try {
      const jobSeeker = await JobSeekersSchema.findById(jobSeekerId)
        .populate({
          path: "user_Id",
          select: "avatar email" ,
        })
        .populate({
          path: "savedJobs",
          select: "_id",
        })
        .populate({
          path: "applyJobs",
          select: "_id",
        })
        .select("fullname savedJobs applyJobs email user_Id");
  
      if (!jobSeeker) {
        return null;
      }
  
      const result = {
        fullname: jobSeeker.fullname,
        email: jobSeeker.user_Id?.email,
        savedJobs: jobSeeker.savedJobs,
        applyJobs: jobSeeker.applyJobs,
        avatar: jobSeeker.user_Id?.avatar,
      };
  
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to get job seeker by ID");
    }
  };
  
    
  export default {
      findJobSeekerByUserId,checkSavedJob,getAllSavedJobs,getJobSeekerById
  }