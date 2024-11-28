import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchEtudiants } from "../services/etudiantService";

const EtudiantList = () => {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    fetchEtudiants().then((response) => setEtudiants(response.data));
  }, []);

  const calculateAverage = (notes) => {
    if (!notes || notes.length === 0) return 0;
    const total = notes.reduce((sum, note) => sum + note.valeurDeNote, 0);
    return total / notes.length;
  };

  return (
    <div>
      <h1>Liste des étudiants</h1>
      <Link to="/ajouter-etudiant">Ajouter un étudiant</Link>
      <table border="1">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date de création</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => {
            const moyenne = calculateAverage(etudiant.notes); // Calcul de la moyenne
            return (
              <tr
                key={etudiant.id}
                style={{
                  backgroundColor: moyenne > 10 ? "lightgreen" : "lightcoral",
                }}
              >
                <td>
                  <Link to={`/etudiants/${etudiant.id}`}>{etudiant.nom}</Link>
                </td>
                <td>{etudiant.dateDeCreation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EtudiantList;