import express from 'express';
import roleController from '../controller/roles.js';

const roleRouter = express.Router();

roleRouter.get('/', roleController.getAllRoles);

export default roleRouter;
