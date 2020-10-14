const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");
const transactionRouter = require("./transaction");

router.use("/auth", authRouter);
router.use("/", userRouter);
router.use("/product", productRouter);
router.use("/order", transactionRouter);

module.exports = router;
