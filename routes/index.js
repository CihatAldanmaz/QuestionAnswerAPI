const express = require('express');

const auth = require("./auth")
const questions = require("./question")

const router = express.Router();

router.use("/auth", auth)
router.use("/questions", question)

module.exports = router;