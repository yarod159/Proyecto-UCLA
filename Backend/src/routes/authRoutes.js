const express = require("express");
const router = express.Router();

const { register, login, verifyToken, putUserToEmpleados } = require("../controllers/authControllers");
const updateEmpleadoWhenRoleChanges = require("../middlewares/userMoveEmpleadoMiddlewares");



router.post("/register", register);
router.post("/login", login);
router.get('/verify',verifyToken);

router.put('/change-role/:userId',updateEmpleadoWhenRoleChanges, putUserToEmpleados);

module.exports = router;
