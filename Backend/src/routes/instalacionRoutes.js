const express = require("express");
const router = express.Router();

const {postInstalacion, getInstalacion, postPreguntaFaq, getFaq, deleteFaq} = require("../controllers/InstalacionControllers");

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);
router.post("/post-faq", postPreguntaFaq);
router.get("/get-faq", getFaq);
router.delete("/delete-faq/:id", deleteFaq);

module.exports = router;
