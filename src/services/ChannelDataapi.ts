import { api } from "./api";

export const getChannels = async () => {
  try {
    const response = await api.get("/channel-data"); 
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};