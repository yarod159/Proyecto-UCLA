const express = require("express");
const { postEstados, postMunicipios, getEstadosM } = require("../controllers/EstadosMControllers");
const router = express.Router();


router.post("/post-Estados", postEstados);
router.post("/post-Municipios", postMunicipios);
router.get("/get-estados", getEstadosM);

module.exports = router;
