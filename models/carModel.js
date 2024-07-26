import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    rentalStatus: { type: String, enum: ['available', 'rented'], default: 'available' }
});

const Car = mongoose.model('Car', CarSchema);
export default Car;