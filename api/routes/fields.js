// routes/jobsRoutes.js

import express from "express";
import fieldsController from "../controller/fields.js";

const fieldsRouter = express.Router();

// GET all jobs
fieldsRouter.get("/getTopFields", fieldsController.getFieldsHostest);
fieldsRouter.get("/getAllFields", fieldsController.getAllFields);

export default fieldsRouter;
