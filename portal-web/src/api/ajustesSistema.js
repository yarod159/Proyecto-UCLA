import axios from "./axios";

export const getAjustesSistemaRequest  = async () => axios.get(`/instalador/get-instalacion`);
export const getCompSistemaRequest  = async () => axios.get(`/instalador/get-compSistema`);