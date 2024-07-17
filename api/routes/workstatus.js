import express from "express";
import workStatusController from "../controller/workstatus.js";

const router = express.Router();

// GET all work statuses
router.get("/getAllWorkStatus", workStatusController.getAllWorkStatus);


router.get("/getWorkStatusById/:id", workStatusController.getWorkStatusById);
export default router;
