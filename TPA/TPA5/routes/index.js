const express = require('express');
const router = express.Router();

const userRouter = require('./user.router.js');
const toDoRouter = require('./ToDo.router.js');
const authRouter = require('./auth.router.js');

router.use("/user", userRouter);
router.use("/ToDo", toDoRouter);
router.use("/auth", authRouter);


module.exports = router;
