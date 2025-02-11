import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'secret');
        req.customer = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware;
