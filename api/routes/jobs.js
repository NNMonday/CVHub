// routes/jobsRoutes.js

import express from "express";
import jobController from "../controller/jobs.js";

const jobRouter = express.Router();

// GET all jobs
jobRouter.get("/getAllJobs", jobController.getAllJobs);

// GET job by ID
jobRouter.get("/getJobById/:jobId", jobController.getJobById);

jobRouter.get("/search", jobController.searchJobsByNameAndLocation);
export default jobRouter;
