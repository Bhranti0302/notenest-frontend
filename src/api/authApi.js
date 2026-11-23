import axiosInstance from "./axiosInstance";

export const registerUser = (userData) =>
  axiosInstance.post("/auth/register", userData);

export const loginUser = (credentials) =>
  axiosInstance.post("/auth/login", credentials);

export const logoutUser = () => axiosInstance.post("/auth/logout");
