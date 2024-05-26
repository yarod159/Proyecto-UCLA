import axios from "./axios";

export const getAjustesSistemaRequest  = async () => axios.get(`/instalador/get-instalacion`);
export const postAjustesSistemaRequest = async () => axios.post(`/instalador/post-instalacion`)
export const putAjustesSistemaRequest = async (datos, id) => axios.put(`instalador/put-instalacion/${id}`, datos)
