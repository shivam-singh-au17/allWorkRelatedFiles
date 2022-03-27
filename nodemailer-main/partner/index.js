const express = require("express");
const router = express.Router();
const partnerValidation = require("./validation");
const { validateParams } = require("../../middlewares");
const partnerService = require("./service");

router.post("/partner/", validateParams(partnerValidation.post), partnerService().post);

module.exports = router;

