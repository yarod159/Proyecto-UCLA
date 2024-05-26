import axios from "./axios";

export const getAjustesSistemaRequest  = async () => axios.get(`/instalador/get-instalacion`);