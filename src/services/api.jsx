import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const createItem = async (method, data, config) =>
  api.post(`${method}/create`, data, config);

export const categoriesCount = async (config) => api.get("/users", config);

export const getItemById = async (method, itemId, config) =>
  api.get(`${method}/${itemId}`, config);

export const getAllTitlesAndIds = async (method, config) =>
  api.get(`${method}`, config);

export const deleteItem = async (method, itemId, config) =>
  api.delete(`${method}/${itemId}`, config);

export const signUp = async (data) => api.post("/users/sign-up", data);

export const signIn = async (data) => api.post("/users/sign-in", data);
