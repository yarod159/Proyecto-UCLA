import axios from "./axios";

export const getSolicitudDeServiciosRequest  = async () => axios.get(`/solicitud/get-SolicituDeServicios`);

