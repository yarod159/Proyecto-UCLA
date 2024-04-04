const express = require("express");
const router = express.Router();
// En tu archivo de rutas


const { postEmpleado ,getEmpleados} = require("../controllers/EmpleadoControllers");


router.post("/post-empleado", postEmpleado  );
router.get("/get-empleado", getEmpleados );

module.exports = router;
