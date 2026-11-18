import axiosInstance from "./axiosInstance";

// User profile endpoints
export const getMyProfile = () => axiosInstance.get("/user/me");

export const updateMyProfile = (data) => axiosInstance.put("/user/me", data);

export const deleteMyAccount = () => axiosInstance.delete("/user/me");

// Admin endpoints
export const getAllUsers = () => axiosInstance.get("/user");

export const updateUserById = (id, data) =>
  axiosInstance.put(`/user/${id}`, data);

export const deleteUserById = (id) => axiosInstance.delete(`/user/${id}`);
