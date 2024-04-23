const express = require("express");
const router = express.Router();

const { postInfoGeneral, getInfoGeneral,deleteInfoGeneral } = require("../controllers/infoGeneralControllers");

router.post("/post-infoGeneral", postInfoGeneral);
router.get("/get-infoGeneral", getInfoGeneral);
router.delete("/delete-infoGeneral/:id", deleteInfoGeneral);

module.exports = router;
