// Importa axios si aún no lo has hecho
import axios from './axios';

export const putUsuarioEmpleadoRequest = async (userId, role) => {
  try {
    // Usa axios.put en lugar de axios.get
    const response = await axios.put(`/auth/change-role/${userId}`, { role });
    return response.data;
  } catch (error) {
    console.error("Error cambiando el rol del usuario:", error);
    throw error;
  }
};


export const getRolRequest = async (userId) => {
    try {
      const response = await axios.get(`/auth/get-userRole/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user User:", error);
      throw error;
    }
  };
  
  





