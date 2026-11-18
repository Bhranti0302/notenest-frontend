import axiosInstance from "./axiosInstance";

// Suggest category, tags and improved content
export const suggestNoteAI = (data) => axiosInstance.post("/ai/suggest", data);

// Summarize a note
export const summarizeNoteAI = (noteId) =>
  axiosInstance.post(`/ai/summarize/${noteId}`);

// Improve note writing
export const improveNoteAI = (noteId, data) =>
  axiosInstance.post(`/ai/improve/${noteId}`, data);

// Extract action items
export const extractActionItemsAI = (noteId) =>
  axiosInstance.post(`/ai/action-items/${noteId}`);
