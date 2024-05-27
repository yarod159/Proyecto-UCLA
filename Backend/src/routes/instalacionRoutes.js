const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/session");
const checkRoleAuth = require("../middlewares/rol");

<<<<<<< HEAD
const {postInstalacion, getInstalacion, patchInstalacion,deleteInstalacion, postPreguntaFaq, getFaq, deleteFaq} = require("../controllers/InstalacionControllers");

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);
router.patch("/patch-instalacion/:id", patchInstalacion);
router.delete("/delete-instalacion/:id", deleteInstalacion);
router.post("/post-faq", postPreguntaFaq);
=======
const {postInstalacion, getInstalacion, postPreguntaFaq, getFaq, deleteFaq, putInstalacion, postMetPago,  getMetPago, putCompSistema, postCompSistema, getCompSistema, deleteServOfrecido, getIServOfrecido, postServOfrecido} = require("../controllers/InstalacionControllers");

router.post("/post-instalacion", postInstalacion);
router.get("/get-instalacion", getInstalacion);
router.put("/put-instalacion/:id", putInstalacion);
router.post("/post-faq", authMiddleware, checkRoleAuth(['empleado']), postPreguntaFaq);
>>>>>>> web-Hector
router.get("/get-faq", getFaq);
router.delete("/delete-faq/:id", authMiddleware, checkRoleAuth(['empleado']), deleteFaq);
router.post("/post-metodoPago", postMetPago);
router.get("/get-metodoPago", getMetPago);
router.put("/put-compSistema/:id", putCompSistema);
router.post("/post-compSistema", postCompSistema);
router.get("/get-compSistema", getCompSistema);
router.get("/get-servOfrecido", getIServOfrecido);
router.post("/post-servOfrecido", postServOfrecido);
router.delete("/delete-servOfrecido/:id", deleteServOfrecido);

module.exports = router;
