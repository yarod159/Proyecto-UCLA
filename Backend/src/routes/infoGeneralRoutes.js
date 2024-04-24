const express = require("express");
const router = express.Router();

const { postInfoGeneral, getInfoGeneral } = require("../controllers/infoGeneralControllers");

router.post("/post-infoGeneral", postInfoGeneral);
router.get("/get-infoGeneral", getInfoGeneral);

module.exports = router;
