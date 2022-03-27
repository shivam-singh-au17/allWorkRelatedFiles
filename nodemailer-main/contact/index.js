const express = require("express");
const router = express.Router();
const contactValidation = require("./validation");
const { validateParams } = require("../../middlewares");
const contactService = require("./service");

router.post("/contact/", validateParams(contactValidation.post), contactService().post);

module.exports = router;

