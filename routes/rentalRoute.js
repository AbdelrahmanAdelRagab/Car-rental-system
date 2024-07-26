import express from 'express';
const router = express.Router();
import * as rentalController from '../controllers/rentalController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/', authMiddleware, rentalController.createRental);
router.put('/:id', authMiddleware, rentalController.updateRental);
router.delete('/:id', authMiddleware, rentalController.deleteRental);
router.get('/:id', authMiddleware, rentalController.getRental);
router.get('/', authMiddleware, rentalController.getAllRentals);

export default router;
