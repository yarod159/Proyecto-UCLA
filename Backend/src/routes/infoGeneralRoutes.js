const express = require("express");
const router = express.Router();

const { postInfoGeneral, getInfoGeneral, deleteInfoGeneral, patchInfoGeneral } = require("../controllers/infoGeneralControllers");

router.post("/post-infoGeneral", postInfoGeneral);
router.get("/get-infoGeneral", getInfoGeneral);
router.delete("/delete-infoGeneral/:id", deleteInfoGeneral);
router.patch("/patch-infoGeneral/:id", patchInfoGeneral);
module.exports = router;
