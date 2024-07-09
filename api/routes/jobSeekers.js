import express from "express";
import jobSeekersController from "../controller/jobSeekers.js";
import verifyToken from "../middleware/verifyToken.js";
import JobSeekersSchema from "../model/JobSeekers.js";

const router = express.Router();

router.get("/savedjobs", verifyToken, jobSeekersController.getAllSavedJobs);
router.get(
  "/getJobSeekerById/:jobSeekerId",
  verifyToken,
  jobSeekersController.getJobSeekerById
);

router.post(
  "/setting/savedjob/:action",
  verifyToken,
  jobSeekersController.handleSavedJob
);

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    fullname,
    gender,
    dob,
    location,
    skills_id,
    experience,
    isSeeking,
    savedJobs,
    applyJobs,
    followingCompany,
    user_Id,
    about,
  } = req.body;

  try {
    const jobSeeker = await JobSeekersSchema.findById(id);

    if (!jobSeeker) {
      return res.status(404).json({ message: "Job Seeker not found" });
    }

    jobSeeker.fullname = fullname || jobSeeker.fullname;
    jobSeeker.gender = gender || jobSeeker.gender;
    jobSeeker.dob = dob || jobSeeker.dob;
    jobSeeker.location = location || jobSeeker.location;
    jobSeeker.skills_id = skills_id || jobSeeker.skills_id;
    jobSeeker.experience = experience || jobSeeker.experience;
    jobSeeker.isSeeking = isSeeking || jobSeeker.isSeeking;
    jobSeeker.savedJobs = savedJobs || jobSeeker.savedJobs;
    jobSeeker.applyJobs = applyJobs || jobSeeker.applyJobs;
    jobSeeker.followingCompany = followingCompany || jobSeeker.followingCompany;
    jobSeeker.user_Id = user_Id || jobSeeker.user_Id;
    jobSeeker.about = about || jobSeeker.about;

    const updatedJobSeeker = await jobSeeker.save();
    res.status(200).json(updatedJobSeeker);
  } catch (error) {
    res.status(500).json({ message: "Error updating job seeker", error });
  }
});

export default router;
