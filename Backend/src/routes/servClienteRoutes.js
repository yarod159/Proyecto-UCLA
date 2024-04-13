const express = require("express");
const router = express.Router();

const {postReporteCliente, getReporteCliente} = require("../controllers/ServClienteControllers");

router.post("/post-reporteCliente", postReporteCliente);
router.get("/get-reporteCliente", getReporteCliente);


module.exports = router;