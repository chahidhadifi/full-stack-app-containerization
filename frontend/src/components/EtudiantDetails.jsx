import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchEtudiantById } from "../services/etudiantService";
import { fetchNotesByEtudiantId } from "../services/noteService";

const EtudiantDetails = () => {
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchEtudiantById(id).then((response) => setEtudiant(response.data));
    fetchNotesByEtudiantId(id).then((response) => setNotes(response.data));
  }, [id]);

  return (
    <div>
      {etudiant && (
        <div>
          <h1>Détails de {etudiant.nom}</h1>
          <Link to={"/"}>Retour</Link>
          <h2>Notes</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Nom du cours</th>
                <th>Valeur</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr
                  key={note.id}
                  style={{
                    backgroundColor:
                      note.valeurDeNote > 10 ? "lightgreen" : "lightcoral",
                  }}
                >
                  <td>{note.nomDuCours}</td>
                  <td>{note.valeurDeNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={`/etudiants/${id}/ajouter-note`}>Ajouter une note</Link>
        </div>
      )}
    </div>
  );
};

export default EtudiantDetails;
