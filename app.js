import express from 'express';
import connectDB from './config/db.js';

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/cars', (await import('./routes/carRoutes.js')).default);
app.use('/api/customers', (await import('./routes/customerRoutes.js')).default);
app.use('/api/rentals', (await import('./routes/rentalRoutes.js')).default);

export default app;
