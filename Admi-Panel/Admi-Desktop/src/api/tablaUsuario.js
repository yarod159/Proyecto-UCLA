import axios from "./axios";

export const getUsuariosRequest  = async () => axios.get(`/users/get-users`);