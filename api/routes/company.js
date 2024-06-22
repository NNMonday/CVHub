// routes/jobsRoutes.js

import express from "express";
import companyController from "../controller/company.js";

const companyRouter = express.Router();

// GET all jobs
companyRouter.get('/getAllCompanies', companyController.getAllCompanies);

companyRouter.get("/search", companyController.searchCompaniesByName);

export default companyRouter;
