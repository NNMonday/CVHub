import express from 'express';
import jobSeekersController from "../controller/jobSeekers.js";
import verifyToken from '../middleware/verifyToken.js';


const router = express.Router();

router.get('/savedjobs', verifyToken, jobSeekersController.getAllSavedJobs);
router.get("/getJobSeekerById/:jobSeekerId", verifyToken, jobSeekersController.getJobSeekerById);

router.post('/setting/savedjob/:action',verifyToken, jobSeekersController.handleSavedJob);
export default router;
