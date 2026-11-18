import axiosInstance from "./axiosInstance";

// User note endpoints
export const createNote = (noteData) => axiosInstance.post("/note", noteData);

export const getMyNotes = () => axiosInstance.get("/note");

export const updateNote = (id, noteData) =>
  axiosInstance.patch(`/note/${id}`, noteData);

export const deleteNote = (id) => axiosInstance.delete(`/note/${id}`);

export const togglePinNote = (id) => axiosInstance.patch(`/note/${id}/pin`);

// Admin endpoint
export const getAllNotesAdmin = () => axiosInstance.get("/note/getNotes");
