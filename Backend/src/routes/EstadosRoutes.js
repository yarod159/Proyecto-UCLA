const express = require("express");
const { postEstados, postMunicipios, getEstadosM, getSoloEstados } = require("../controllers/EstadosMControllers");
const router = express.Router();


router.post("/post-Estados", postEstados);
router.post("/post-Municipios", postMunicipios);
router.get("/get-estados", getEstadosM);
router.get("/get-SoloEstados", getSoloEstados);

module.exports = router;
