const express = require("express");
const router = express.Router();

const { register, login, verifyToken, putUserToEmpleados, getUserRole, registerFull } = require("../controllers/authControllers");
const updateEmpleadoWhenRoleChanges = require("../middlewares/userMoveEmpleadoMiddlewares");

const authMiddleware = require("../middlewares/session");



router.post("/register", register);
router.post("/registerFull", registerFull);
router.post("/login", login);
router.get('/verify',verifyToken);

router.put('/change-role/:userId',updateEmpleadoWhenRoleChanges, putUserToEmpleados);
router.get('/get-userRole/:userId',getUserRole);

module.exports = router;
