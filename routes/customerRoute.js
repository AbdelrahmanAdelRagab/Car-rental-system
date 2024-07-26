import express from 'express';
const router = express.Router();
import * as customerController from '../controllers/customerController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import ownerMiddleware from '../middlewares/ownerMiddleware.js';

router.post('/signup', customerController.signup);
router.post('/signin', customerController.signin);
router.get('/:id', authMiddleware, customerController.getCustomer);
router.get('/', authMiddleware, ownerMiddleware, customerController.getAllCustomers);
router.put('/:id', authMiddleware, ownerMiddleware, customerController.updateCustomer);
router.delete('/:id', authMiddleware, ownerMiddleware, customerController.deleteCustomer);

export default router;
