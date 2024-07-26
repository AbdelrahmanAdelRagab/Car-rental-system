import Car from '../models/carModel.js';

export const addCar = async (req, res) => {
    try {
        const car = new Car(req.body);
        await car.save();
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json({ message: 'Car deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Special APIs
export const getCarsByModel = async (req, res) => {
    try {
        const cars = await Car.find({ model: { $in: req.query.models.split(',') } });
        res.json(cars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAvailableCarsByModel = async (req, res) => {
    try {
        const cars = await Car.find({ model: req.params.model, rentalStatus: 'available' });
        res.json(cars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getCarsByStatusOrModel = async (req, res) => {
    try {
        const cars = await Car.find({
            $or: [{ rentalStatus: req.query.status }, { model: req.query.model }]
        });
        res.json(cars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
