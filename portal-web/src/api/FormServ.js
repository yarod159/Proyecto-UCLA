import axios from "./axios";


export const getEstadosTokenRequest = async () => axios.get(`/pais/get-SoloEstados`);