// routes/jobsRoutes.js

import express from "express";
import companyController from "../controller/company.js";
import verifyToken from '../middleware/verifyToken.js';

const companyRouter = express.Router();

// GET all jobs
companyRouter.post('/getAllCompanies', companyController.getAllCompanies);
companyRouter.get("/getCompanyById/:companyId", verifyToken, companyController.getCompanyById);
companyRouter.get("/search", companyController.searchCompaniesByName);

export default companyRouter;
