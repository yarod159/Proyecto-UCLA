const { handleHttpError , handleErrorResponse} = require("../utils/handleError");
const { verifyToken } = require("../utils/handleToken");

const authMiddleware = async (req, res, next) => {
    try {
        // Extraer el token del encabezado Authorization
        const authHeader = req.headers.authorization;
        console.log('prueba de sesion:',authHeader)
        if (!authHeader) {
            handleHttpError(res, "NEED_SESSION", 401);
            return;
        }

        // Dividir el encabezado por espacio y tomar el último elemento
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'No toke provided' });
        }

        // Verificar el token
        const dataToken = await verifyToken(token);
        
        // Verificar si dataToken existe y tiene _id
        if (dataToken && dataToken._id) {
            // Asignar el usuario autenticado al objeto request
            req.user = dataToken; // Asumiendo que quieres almacenar el usuario autenticado en req.user
           
            next();
        } else {
            handleHttpError(res, "NOT_ALLOW", 409);
        }
    } catch (e) {
        handleHttpError(res, "INTERNAL_SERVER_ERROR", 500);
    }
};

module.exports = authMiddleware;
