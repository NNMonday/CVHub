import express from "express";
import Jobs from "../model/Jobs.js";
import JobSeekersSchema from "../model/JobSeekers.js";
import ComapnySchema from "../model/Company.js";

const statsRoute = express.Router();

statsRoute.get("/homepage", async (req, res, next) => {
  try {
    const currentDateUTC = new Date().toISOString();

    console.log(currentDateUTC);
    const jobCount = await Jobs.countDocuments({
      deadline: { $gte: currentDateUTC },
    });
    const companyCount = await ComapnySchema.countDocuments({});
    const jobSeekerCount = await JobSeekersSchema.countDocuments({});

    res.status(200).json({
      jobs: jobCount,
      companies: companyCount,
      jobSeekers: jobSeekerCount,
    });
  } catch (error) {
    next(error);
  }
});

export default statsRoute;
