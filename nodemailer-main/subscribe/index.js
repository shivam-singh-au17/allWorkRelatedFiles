const express = require("express");
const router = express.Router();
const subscribeValidation = require("./validation");
const { validateParams } = require("../../../middlewares");
const subscribeService = require("./service");

router.post("/subscribe/", validateParams(subscribeValidation.post), subscribeService().post);

module.exports = router;

