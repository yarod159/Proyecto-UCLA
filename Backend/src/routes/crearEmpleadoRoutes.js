const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/session");



const { postEmpleado ,getEmpleados} = require("../controllers/EmpleadoControllers");
const checkRoleAuth = require("../middlewares/rol");



router.post("/post-empleado",authMiddleware,checkRoleAuth(['user']), postEmpleado  );
router.get("/get-empleado",authMiddleware, checkRoleAuth(['user']), getEmpleados );

module.exports = router;
