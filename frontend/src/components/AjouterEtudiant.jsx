import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEtudiant } from "../services/etudiantService";

const AjouterEtudiant = () => {
  const navigate = useNavigate();
  const [etudiant, setEtudiant] = useState({ nom: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtudiant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEtudiant(etudiant).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ajouter un étudiant</h1>
      <div>
        <label>Nom de l'étudiant:</label>
        <input
          type="text"
          name="nom"
          value={etudiant.nom}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AjouterEtudiant;
