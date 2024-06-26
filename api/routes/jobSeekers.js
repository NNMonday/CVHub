import express from 'express';
import jobSeekersController from "../controller/jobSeekers.js";
import verifyToken from '../middleware/verifyToken.js';


const router = express.Router();

// Protected route with token verification middleware
// router.post('/savedjobs', verifyToken, jobSeekersController.addSavedJob); // Thêm công việc đã lưu
// router.delete('/savedjobs/:jobId', verifyToken, jobSeekersController.removeSavedJob); // Xóa công việc đã lưu
router.get('/savedjobs', verifyToken, jobSeekersController.getAllSavedJobs);

router.post('/setting/savedjob/:action',verifyToken, jobSeekersController.handleSavedJob);
export default router;
