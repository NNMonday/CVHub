import express from 'express';
import locationController from '../controller/locations.js';

const locationRouter = express.Router();

locationRouter.get('/getAllLocation', locationController.getAllLocations);


export default locationRouter;
