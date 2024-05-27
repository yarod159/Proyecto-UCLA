import axios from "./axios";

export const deleteServiciosOfrecidosRequest = async (id) =>axios.post(`/instalador/delete-servOfrecido/${id}`);