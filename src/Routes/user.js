const express = require("express");
const usersRouter = express.Router();

const userController = require("../Controllers/user");

const uploadImage = require("../Helpers/Middlewares/imgUpload");

usersRouter.get("/customer/:id", userController.showDetailCustomer);
usersRouter.get("/seller/:id", userController.showDetailSeller);

usersRouter.patch(
  "/customer/:id",
  uploadImage.singleUpload,
  userController.updateCustomer
);
usersRouter.patch(
  "/customer-address/:id",
  userController.addAddress
);
usersRouter.patch(
  "/reset-pass-customer/:id",
  userController.resetPassCustomer
);

usersRouter.patch(
  "/seller/:id",
  uploadImage.singleUpload,
  userController.updateSeller
);
usersRouter.patch(
  "/reset-pass-seller/:id",
  userController.resetPassSeller
);

module.exports = usersRouter;
