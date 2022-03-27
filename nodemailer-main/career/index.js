const express = require("express");
const router = express.Router();
const careerValidation = require("./validation");
const { validateParams } = require("../../middlewares");
const careerService = require("./service");

router.post("/career/", validateParams(careerValidation.post), careerService().post);

module.exports = router;

