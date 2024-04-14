const express = require("express");
const router = express.Router();

const { postInfoGeneral, getInfoGeneral } = require("../controllers/infoGeneralController");

router.post("/post-infoGeneral", postInfoGeneral);
router.get("/get-infoGeneral", getInfoGeneral);

module.exports = router;
