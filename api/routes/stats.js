import express from "express";
import Jobs from "../model/Jobs.js";
import JobSeekersSchema from "../model/JobSeekers.js";
import ComapnySchema from "../model/Company.js";

const statsRoute = express.Router();

statsRoute.get("/homepage", async (req, res, next) => {
  try {
    const currentDateUTC = new Date().toISOString();
    const weekAgoDateUTC = new Date(
      new Date().setDate(new Date().getDate() - 7)
    ).toISOString();

    const jobCount = await Jobs.countDocuments({
      deadline: { $gte: currentDateUTC },
    });
    const companyCount = await ComapnySchema.countDocuments({});
    const jobSeekerCount = await JobSeekersSchema.countDocuments({});
    const latestJobCount = await Jobs.countDocuments({
      createdAt: { $gte: weekAgoDateUTC },
    });

    res.status(200).json([
      { count: jobCount, title: "Live Jobs" },
      { count: companyCount, title: "Companies" },
      { count: jobSeekerCount, title: "Candidates" },
      { count: latestJobCount, title: "Latest Jobs" },
    ]);
  } catch (error) {
    next(error);
  }
});

export default statsRoute;
