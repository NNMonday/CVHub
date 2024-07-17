// routes/jobsRoutes.js

import express from "express";
import companyController from "../controller/company.js";
import verifyToken from "../middleware/verifyToken.js";
import Company from "../model/Company.js";

const companyRouter = express.Router();

// GET all jobs
companyRouter.post("/getAllCompanies", companyController.getAllCompanies);
companyRouter.post(
  "/insertCompany",
  // verifyToken,
  companyController.insertCompany
);
companyRouter.get(
  "/getCompanyById/:companyId",
  // verifyToken,
  companyController.getCompanyById
);
companyRouter.get("/search", companyController.searchCompaniesByName);

companyRouter.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { company_name, website, description, employee_quantity, user_Id } =
    req.body;
  try {
    const company = await Company.find({ user_id: id });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    company.company_name = company_name || company.company_name;
    company.website = website || company.website;
    company.description = description || company.description;
    company.employee_quantity = employee_quantity || company.employee_quantity;
    company.user_Id = user_Id || company.user_Id;

    const updatedCompany = await company.save();
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: "Error updating company", error });
  }
});

export default companyRouter;
