const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");
const transactionRouter = require("./transaction");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/", productRouter);
router.use("/order", transactionRouter);

module.exports = router;
