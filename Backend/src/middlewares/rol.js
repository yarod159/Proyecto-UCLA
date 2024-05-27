const { verifyToken } = require("../utils/handleToken");
const { handleErrorResponse, handleHttpError } = require("../utils/handleError");
const User = require("../models/User"); // Importa el modelo User directamente

const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      handleHttpError(res, "NOT_ALLOW", 409);
      return;
    }
    const token = authHeader.split(" ")[1];
    const tokenData = await verifyToken(token);
    const userData = await User.findById(tokenData._id);

    // Asegurarse de que roles y userData.role sean arrays antes de comparar
    const userRolesArray = Array.isArray(userData.role)? userData.role : [userData.role];
    const allowedRolesArray = Array.isArray(roles)? roles : [roles];

    if (allowedRolesArray.some(role => userRolesArray.includes(role))) {
      next();
    } else {
      handleErrorResponse(res, "No tienes permisos");
    }
  } catch (e) {
    handleHttpError(res, e);
  }
};



module.exports = checkRoleAuth;
