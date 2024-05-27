const express = require("express");
const { postSolicitudDeServicios } = require("../controllers/SolicitudDeServicios");

const router = express.Router();


router.post("/post-SolicituDeServicios", postSolicitudDeServicios);


module.exports = router;
