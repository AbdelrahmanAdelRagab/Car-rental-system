import Customer from '../models/customerModel.js';

const ownerMiddleware = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.customer.id);
        if (!customer || !customer.isOwner) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default ownerMiddleware;
