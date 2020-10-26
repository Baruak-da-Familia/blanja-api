const { express } = require("../../sharedVariable");
const authRouter = express.Router();
const authController = require("../Controllers/auth");

authRouter.post("/register/customer", authController.customerRegister);
authRouter.post("/register/seller", authController.sellerRegister);
authRouter.post("/login/customer", authController.customerLogin);
authRouter.post("/login/seller", authController.sellerLogin);
authRouter.post('/sendemailcustomer', authController.sendEmailCustomer)
authRouter.post('/sendemailseller', authController.sendEmailSeller)
authRouter.post('/resetpasscustomer', authController.customerReset)
authRouter.post('/resetpassseller', authController.sellerReset)


module.exports = authRouter;
