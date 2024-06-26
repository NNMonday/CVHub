
import jobSeekersRepository from '../repository/jobSeekers.js';
// Function to add saved job
export const addSavedJob = async (req, res) => {
  const { jobId } = req.body;
  const userId = req.decodedToken.userId; // Assuming userId is decoded from JWT token

  try {
    let jobSeeker = await jobSeekersRepository.findJobSeekerByUserId(userId);

    if (!jobSeeker) {
      return res.status(404).json({ error: 'Job seeker not found' });
    }

    jobSeeker = await jobSeekersRepository.addSavedJobForJobSeeker(userId, jobId);

    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to remove saved job
export const removeSavedJob = async (req, res) => {
  const { jobId } = req.params; // Get jobId from URL params
  const userId = req.decodedToken.userId; // Assuming userId is decoded from JWT token

  try {
    let jobSeeker = await jobSeekersRepository.findJobSeekerByUserId(userId);

    if (!jobSeeker) {
      return res.status(404).json({ error: 'Job seeker not found' });
    }

    jobSeeker = await jobSeekersRepository.removeSavedJobForJobSeeker(userId, jobId);

    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllSavedJobs = async (req, res) => {
  try {
    const userId = req.decodedToken.userId; // Get userId from decodedToken
    const savedJobsIds = await jobSeekersRepository.getAllSavedJobs(userId);
    res.status(200).json(savedJobsIds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  addSavedJob,removeSavedJob,getAllSavedJobs
}