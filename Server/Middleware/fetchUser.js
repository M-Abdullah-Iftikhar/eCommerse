const jwt = require('jsonwebtoken');
const JWT_SECRET = "hopify-@ecom-@web";


const fetchUser = (req, res, next) => {
    const token = req.header('token');
   
    if (!token) {
        return res.status(401).json({ error: "No token available" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ error: "Token verification failed" });
    }
};



module.exports = {
    fetchUser
}