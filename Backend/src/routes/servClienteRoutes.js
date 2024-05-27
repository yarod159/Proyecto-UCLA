const express = require("express");
const router = express.Router();

const {postReporteCliente, getReporteCliente, deleteReporteCliente} = require("../controllers/ServClienteControllers");

router.post("/post-reporteCliente", postReporteCliente);
router.get("/get-reporteCliente", getReporteCliente);
router.delete("/delete-reporteCliente/:id", deleteReporteCliente);


module.exports = router;