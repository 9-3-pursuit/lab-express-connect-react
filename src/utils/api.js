import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const fetchLogs = async () => {
  try {
    const response = await axios.get(`${API}/logs`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
