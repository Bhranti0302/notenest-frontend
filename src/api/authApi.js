import axiosInstance from "./axiosInstance";

export const registerUser = (userData) =>
  axiosInstance.post("/auth/register", userData);

const loginUser = (credentials) =>
  axiosInstance.post("/auth/login", credentials);

const logoutUser = () => axiosInstance.post("/auth/logout");
