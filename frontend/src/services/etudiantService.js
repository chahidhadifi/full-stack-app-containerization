import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/etudiants";

export const fetchEtudiants = () => axios.get(API_URL);
export const fetchEtudiantById = (id) => axios.get(`${API_URL}/${id}`);
export const createEtudiant = (etudiant) => axios.post(API_URL, etudiant);
export const deleteEtudiant = (id) => axios.delete(`${API_URL}/${id}`);
