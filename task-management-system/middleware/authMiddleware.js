const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Get token after 'Bearer'
    // console.log("Received token:", token);

    // const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        // console.log("Error verifying token:", err);
        res.status(400).json({ message: "Invalid token" });
    }
};
