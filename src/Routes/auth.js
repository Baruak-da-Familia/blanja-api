const authRouter = require("express").Router();
const authController = require("../Controllers/auth");

authRouter.post("/register/customer", authController.customerRegister);
authRouter.post("/register/seller", authController.sellerRegister);
authRouter.post("/login/customer", authController.customerLogin);
authRouter.post("/login/seller", authController.sellerLogin);

module.exports = authRouter;