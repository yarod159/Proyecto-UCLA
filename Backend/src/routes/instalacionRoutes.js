const express = require("express");
const router = express.Router();

const {postInstalacion, getInstalacion, postPreguntaFaq, getFaq} = require("../controllers/InstalacionControllers");

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);
router.post("/post-faq", postPreguntaFaq);
router.get("/get-faq", getFaq);

module.exports = router;
