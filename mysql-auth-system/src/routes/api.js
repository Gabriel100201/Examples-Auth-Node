const express = require("express");
const router = express.Router();

const authController = require("../controllers/Api/V1/AuthController");

const {
  userRegisterValidationRules,
  userLoginValidationRules,
} = require("../validations/Api/V1/UserValidation");
const validateTokenMiddleware = require("../middleware/validateToken");


router.post("/register", userRegisterValidationRules(), authController.register);
router.post("/login", userLoginValidationRules(), authController.login);

// Midleware que recibe el token por parametro para ver si es un usuario logueado correctamente
router.use(validateTokenMiddleware);
router.post("/getInfoUser", authController.getInfo)

module.exports = router;
