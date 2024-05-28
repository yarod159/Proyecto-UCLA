import axios from "./axios";

export const getUsuariosRequest  = async () => axios.get(`/users/get-users`);

export const getUserProfileRequest = async () => axios.get(`/users/profile/`);

export const getUserAllRequest = async () => axios.get(`/users/get-profile-completo/`);

