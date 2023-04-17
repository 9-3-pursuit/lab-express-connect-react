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

export const getLog = async (index) => {
  try {
    const response = await axios.get(`${API}/logs/${index}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createLog = async (newLog) => {
  console.log(newLog);
  try {
    await axios.post(`${API}/logs`, newLog);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteLog = async (index) => {
  try {
    await axios.delete(`${API}/logs/${index}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateLog = async (index, updatedLog) => {
  try {
    await axios.put(`${API}/logs/${index}`, updatedLog);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
