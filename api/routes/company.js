// routes/jobsRoutes.js

import express from "express";
import companyController from "../controller/company.js";

const companyRouter = express.Router();

// GET all jobs
companyRouter.get('/getAllCompanies', companyController.getAllCompanies);

export default companyRouter;
