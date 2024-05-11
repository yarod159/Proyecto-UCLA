const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const {postInstalacion, getInstalacion, postPreguntaFaq, getFaq, deleteFaq} = require("../controllers/InstalacionControllers");
=======
const {postInstalacion, getInstalacion, postPreguntaFaq, getFaq, postMetPago,  getMetPago} = require("../controllers/InstalacionControllers");
>>>>>>> web-Hector

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);
router.post("/post-faq", postPreguntaFaq);
router.get("/get-faq", getFaq);
<<<<<<< HEAD
router.delete("/delete-faq/:id", deleteFaq);
=======
router.post("/post-metodoPago", postMetPago);
router.get("/get-metodoPago", getMetPago);
>>>>>>> web-Hector

module.exports = router;
