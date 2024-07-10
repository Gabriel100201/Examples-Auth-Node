const jwt = require("jsonwebtoken");

const validateTokenMiddleware = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.DB_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = validateTokenMiddleware;
