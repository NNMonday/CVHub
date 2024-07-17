import jobsRepository from "../repository/jobs.js";
import jobsRepository from "../repository/jobs.js";

const getAllJobs = async (req, res) => {
  try {
    const { title = "", location = "" } = req.query;
    const jobs = await jobsRepository.getAllJobs(title, location);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get job by ID
const getJobById = async (req, res) => {
  const { jobId } = req.params;
  try {
    const job = await jobsRepository.getJobById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchJobsByNameAndLocation = async (req, res) => {
  try {
    const { name, location } = req.query;
    console.log("name: ", name);
    console.log("location: ", location);
    const jobs = await jobsRepository.searchJobsByNameAndLocation(
      name,
      location
    );
    return res.status(200).json({ data: jobs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const searchJobsByNameAndLocation = async (req, res) => {
  try {
    const { name, location } = req.query;
    console.log("name: ", name);
    console.log("location: ", location);
    const jobs = await jobsRepository.searchJobsByNameAndLocation(
      name,
      location
    );
    return res.status(200).json({ data: jobs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getJobCountByFieldId = async (req, res) => {
  try {
    const jobCounts = await jobsRepository.getJobCountByFieldId();
    return res.status(200).json({ data: jobCounts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getWorkStatusByJobId = async (req, res) => {
  try {
    const jobWorkStatus = await jobsRepository.getWorkStatusByJobId();
    return res.status(200).json({ data: jobWorkStatus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getJobCountByFieldId = async (req, res) => {
  try {
    const jobCounts = await jobsRepository.getJobCountByFieldId();
    return res.status(200).json({ data: jobCounts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getWorkStatusByJobId = async (req, res) => {
  try {
    const jobWorkStatus = await jobsRepository.getWorkStatusByJobId();
    return res.status(200).json({ data: jobWorkStatus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const insertJob = async (req, res) => {
  const {
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
  } = req.body;
  console.log(req.body);
  try {
    // Ensure all required fields are present
    if (
      !minSalary ||
      !maxSalary ||
      !salaryType ||
      !education ||
      !experience ||
      !jobType ||
      !vacancies ||
      !expirationDate ||
      !jobLevel ||
      !applyJobOn ||
      !description ||
      !responsibilities
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const jobData = {
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
    };

    const newJob = await jobsRepository.insertJob(jobData);
    return res.status(201).json(newJob);
  } catch (error) {
    console.error(`Failed to insert job: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

export default {
  getAllJobs,
  getJobById,
  searchJobsByNameAndLocation,
  getJobCountByFieldId,
  getWorkStatusByJobId,
  insertJob,
};
