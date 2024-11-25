import jwt from 'jsonwebtoken'
// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  // Check if token exists
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY);
    req.user = decoded; // Attach user information to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export default verifyToken
