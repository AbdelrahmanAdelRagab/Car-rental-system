import Rental from '../models/rentalModel.js';
import Car from '../models/carModel.js';

export const createRental = async (req, res) => {
    try {
        const rental = new Rental(req.body);
        await rental.save();

        const car = await Car.findById(req.body.car);
        if (car.rentalStatus === 'rented') return res.status(400).json({ message: 'Car is already rented' });
        car.rentalStatus = 'rented';
        await car.save();

        res.status(201).json(rental);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!rental) return res.status(404).json({ message: 'Rental not found' });
        res.json(rental);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndDelete(req.params.id);
        if (!rental) return res.status(404).json({ message: 'Rental not found' });

        const car = await Car.findById(rental.car);
        car.rentalStatus = 'available';
        await car.save();

        res.json({ message: 'Rental deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllRentals = async (req, res) => {
    try {
        const rentals = await Rental.find().populate('car customer');
        res.json(rentals);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getRental = async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id).populate('car customer');
        if (!rental) return res.status(404).json({ message: 'Rental not found' });
        res.json(rental);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
