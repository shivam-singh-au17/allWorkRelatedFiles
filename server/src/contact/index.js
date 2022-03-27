const express = require("express");
const router = express.Router();
// const contactValidation = require("./validation");
// const { validateParams } = require("../../middlewares");
const { Contact } = require("../models/contact");
const contactService = require("./service");

router.post("/contact/", validateParams(contactValidation.post), contactService(Contact).post);
router.get("/contact/", contactService(Contact).get);
router.get("/contact/:id", contactService(Contact).getOne);
router.put("/contact/:id", validateParams(contactValidation.patchOne), contactService(Contact).patchOne);
router.delete("/contact/:id", contactService(Contact, "Contact").deleteOne);

module.exports = router;

