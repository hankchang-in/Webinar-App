const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from header

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach decoded user ID to request object
        next(); // Proceed to next middleware
    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = authenticate;
