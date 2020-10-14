const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/", productRouter);

module.exports = router;
