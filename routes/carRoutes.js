import express from 'express';
const router = express.Router();
import * as carController from '../controllers/carController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/', authMiddleware, carController.addCar);
router.get('/:id', carController.getCar);
router.get('/', carController.getAllCars);
router.put('/:id', authMiddleware, carController.updateCar);
router.delete('/:id', authMiddleware, carController.deleteCar);

// Special APIs
router.get('/model/query', carController.getCarsByModel);
router.get('/model/:model/available', carController.getAvailableCarsByModel);
router.get('/status-or-model', carController.getCarsByStatusOrModel);

export default router;
