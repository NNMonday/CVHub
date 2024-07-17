// routes/jobsRoutes.js

import express from "express";
import jobController from "../controller/jobs.js";

const jobRouter = express.Router();

// GET all jobs
jobRouter.get("/getAllJobs", jobController.getAllJobs);

// GET job by ID
jobRouter.get("/getJobById/:jobId", jobController.getJobById);

jobRouter.get("/search", jobController.searchJobsByNameAndLocation);
jobRouter.get("/field", jobController.getJobCountByFieldId);

jobRouter.get("/getWorkStatusByJobId", jobController.getWorkStatusByJobId);

// POST insert new job
jobRouter.post('/insertjob', jobController.insertJob); 


// Endpoint để lấy các công việc đã ứng tuyển bởi một user
// Add this route in api/routes/jobs.js

// GET jobs applied by a user by userId
jobRouter.get("/appliedJobs/:userId", jobController.getAppliedJobsForUser);
jobRouter.get("/favoriteJobs/:userId", jobController.getFavoriteJobsByUser);
export default jobRouter;
