import jobSeekersRepository from "../repository/jobSeekers.js";
// Function to add saved job
const getJobSeekerById = async (req, res) => {
  try {
    const jobSeekerId = req.params.jobSeekerId;
    const jobSeeker = await jobSeekersRepository.getJobSeekerById(jobSeekerId);

    if (!jobSeeker) {
      return res.status(404).json({ error: "Job Seeker not found" });
    }

    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const handleSavedJob = async (req, res) => {
  const { jobId } = req.body;
  const userId = req.decodedToken.userId;
  const { action } = req.params;

  if (!["add", "remove"].includes(action)) {
    return res
      .status(400)
      .json({ error: 'Invalid action. Use "add" or "remove".' });
  }

  try {
    let jobSeeker = await jobSeekersRepository.findJobSeekerByUserId(userId);
    if (!jobSeeker) {
      return res.status(404).json({ error: "Job seeker not found" });
    }
    jobSeeker = await jobSeekersRepository.checkSavedJob(userId, jobId, action);
    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllSavedJobs = async (req, res) => {
  try {
    const userId = "66964c35837e4ae73fa17cfe"
    const savedJobsIds = await jobSeekersRepository.getAllSavedJobs(userId);
    res.status(200).json(savedJobsIds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  handleSavedJob,
  getAllSavedJobs,
  getJobSeekerById,
};
