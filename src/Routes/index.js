const express = require("express");
const router = express.Router();

const authRouter = require("./auth");
const userRouter = require("./user");
const transactionRouter = require("./transaction");

router.use("/auth", authRouter);
router.use("/", userRouter);
router.use("/order", transactionRouter);

module.exports = router;
