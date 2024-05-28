const express = require("express");
const { postSolicitudDeServicios, getSolicitudDeServicios } = require("../controllers/SolicitudDeServicios");

const router = express.Router();


router.post("/post-SolicituDeServicios", postSolicitudDeServicios);
router.get("/get-SolicituDeServicios", getSolicitudDeServicios);

module.exports = router;
