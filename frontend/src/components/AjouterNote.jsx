import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addNote } from "../services/noteService";

const AjouterNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ nomDuCours: "", valeurDeNote: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ ...note, etudiant: { id: Number(id) } }).then(() =>
      navigate(`/etudiants/${id}`)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ajouter une note</h1>
      <div>
        <label>Nom du cours:</label>
        <input type="text" name="nomDuCours" onChange={handleChange} required />
      </div>
      <div>
        <label>Valeur:</label>
        <input
          type="number"
          name="valeurDeNote"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: "20px" }}>
        Ajouter
      </button>
    </form>
  );
};

export default AjouterNote;
