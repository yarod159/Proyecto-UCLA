import axios from "./axios";

export const getUsuarioProfileRequest = async (userId) => {
  try {
    const response = await axios.get(`/users/get-profile/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};