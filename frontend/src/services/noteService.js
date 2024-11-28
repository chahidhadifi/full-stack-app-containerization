import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/notes";

export const fetchNotesByEtudiantId = (etudiantId) =>
  axios.get(`${API_URL}/etudiants/${etudiantId}`);
export const addNote = (note) => axios.post(API_URL, note);
export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);
