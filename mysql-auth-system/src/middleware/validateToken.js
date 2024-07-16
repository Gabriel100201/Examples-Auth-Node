const jwt = require("jsonwebtoken");

/* Si el token es válido y no ha expirado deja usar el resto de métodos de la api */
const validateTokenMiddleware = (req, res, next) => {
  // Lo ideal sería que no lo reciba dentro de body si no dentro de req.Authorization
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
