const express = require("express");
const router = express.Router();
const { validateParams } = require("../../middlewares");
const validationFileUplodeDownlode = require("./validation");
const { FileUplodeDownlode } = require("../../models/fileUplodeDownlode");
const fileUplodeDownlodeService = require("./service");
const upload = require("../../middlewares/fileUplodeDownlode");

router.post("/fileUplode/", upload.single("uplodePic"), validateParams(validationFileUplodeDownlode.create), fileUplodeDownlodeService(FileUplodeDownlode).create);
router.get("/fileUplodes/", fileUplodeDownlodeService(FileUplodeDownlode).get);
router.get("/fileUplode/:id", fileUplodeDownlodeService(FileUplodeDownlode).getOne);
router.get("/fileDownload/:id", fileUplodeDownlodeService(FileUplodeDownlode).downloadOne);
router.put("/fileUplode/:id", upload.single("uplodePic"), validateParams(validationFileUplodeDownlode.update), fileUplodeDownlodeService(FileUplodeDownlode).update);
router.delete("/fileUplode/:id", fileUplodeDownlodeService(FileUplodeDownlode, "fileUplodeDownlode").deleteOne);

module.exports = router;
