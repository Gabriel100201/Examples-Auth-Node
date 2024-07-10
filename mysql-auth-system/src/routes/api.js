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
router.use(validateTokenMiddleware);
router.post("/getInfoUser", authController.getInfo)
/* router.get("/validateToken", authController.validateToken) */

module.exports = router;
