import axios from "./axios";

export const getEmpleadosRequest  = async () => axios.get(`/empleado/get-empleado`);

