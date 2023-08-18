import api from "./apiService";

export const getUserByUsername = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
