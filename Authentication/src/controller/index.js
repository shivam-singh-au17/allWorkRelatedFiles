const express = require("express");
const router = express.Router();
const authLayerService = require("./service");
const authentication = require("../middlewares/authentication");
const UserAuthLayer = require("../model/authLayer");

router.post("/register/", authLayerService(UserAuthLayer).register);
router.post("/login/", authLayerService(UserAuthLayer).login);
router.get("/getAllUsers/", authentication, authLayerService(UserAuthLayer).getAllUser);

module.exports = router;

