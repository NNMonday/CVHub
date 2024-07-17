import express from 'express';
import roleController from '../controller/roles.js';

const roleRouter = express.Router();

roleRouter.get('/getAllRoles', roleController.getAllRoles);
roleRouter.get('/getRoleById/:roleId', roleController.getRoleById);

export default roleRouter;
