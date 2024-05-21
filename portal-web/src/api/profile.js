import axios from "./axios";

export const createProfileRequest = async (user) => axios.post(`/users/post-profile/`, user);

export const getProfileRequest = async () => {
  const { data } = await axios.get(`users/profile`);
  return data;
};


