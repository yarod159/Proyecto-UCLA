const express = require("express");
const router = express.Router();

const {postInstalacion, getInstalacion, postPreguntaFaq} = require("../controllers/InstalacionControllers");

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);
router.post("/post-faq", postPreguntaFaq);

module.exports = router;
