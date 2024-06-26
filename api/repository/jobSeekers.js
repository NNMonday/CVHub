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
  
  // Function to add saved job for a job seeker
  export const addSavedJobForJobSeeker = async (userId, jobId) => {
    try {
      const jobSeeker = await JobSeekersSchema.findOneAndUpdate(
        { user_Id: userId },
        { $push: { savedJobs: jobId } },
        { new: true }
      ).populate('savedJobs');
      return jobSeeker;
    } catch (error) {
      throw error;
    }
  };
  
  // Function to remove saved job for a job seeker
  export const removeSavedJobForJobSeeker = async (userId, jobId) => {
    try {
      const jobSeeker = await JobSeekersSchema.findOneAndUpdate(
        { user_Id: userId },
        { $pull: { savedJobs: jobId } },
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
  
    
  export default {
      addSavedJobForJobSeeker,findJobSeekerByUserId,removeSavedJobForJobSeeker,getAllSavedJobs
  }