const express = require("express");
const router = express.Router();

const { AboutUs } = require("../models/aboutUs");
const cmsService = require("./service");

router.post("/aboutus/", cmsService(AboutUs).post)
router.get("/aboutus/", cmsService(AboutUs).get);
router.get("/aboutus/:id", cmsService(AboutUs).getOne);
router.put("/aboutus/:id", cmsService(AboutUs).patchOne);
router.delete("/aboutus/:id", cmsService(AboutUs, "about").deleteOne);

// router.post("/aboutsixtab/", cmsService(AboutUsSixItemTab).post)
// router.get("/aboutsixtab/", cmsService(AboutUsSixItemTab).get);
// router.get("/aboutsixtab/:id", cmsService(AboutUsSixItemTab).getOne);
// router.put("/aboutsixtab/:id", cmsService(AboutUsSixItemTab).patchOne);
// router.delete("/aboutsixtab/:id", cmsService(AboutUsSixItemTab, "6T").deleteOne);

// router.post("/aboutusteamtab/", cmsService(AboutUsTeamTab).post)
// router.get("/aboutusteamtab/", cmsService(AboutUsTeamTab).get);
// router.get("/aboutusteamtab/:id", cmsService(AboutUsTeamTab).getOne);
// router.put("/aboutusteamtab/:id", cmsService(AboutUsTeamTab).patchOne);
// router.delete("/aboutusteamtab/:id", cmsService(AboutUsTeamTab, "team").deleteOne);


module.exports = router;

