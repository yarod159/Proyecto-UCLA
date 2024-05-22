const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/session");



const { postEmpleado ,getEmpleados} = require("../controllers/EmpleadoControllers");
const checkRoleAuth = require("../middlewares/rol");



router.post("/post-empleado",authMiddleware, postEmpleado  );
router.get("/get-empleado",authMiddleware, getEmpleados );

module.exports = router;
