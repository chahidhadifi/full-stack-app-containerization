import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchEtudiantById } from "../services/etudiantService";
import { fetchNotesByEtudiantId, deleteNote } from "../services/noteService";

const EtudiantDetails = () => {
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchEtudiantById(id).then((response) => setEtudiant(response.data));
    fetchNotesByEtudiantId(id).then((response) => setNotes(response.data));
  }, [id]);

  const handleDeleteNote = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette note ?")) {
      deleteNote(id).then(() => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
      });
    }
  };

  return (
    <div>
      {etudiant && (
        <div>
          <h1>Détails de l'étudiant {etudiant.nom}</h1>
          <Link to={"/"}>Retour</Link>
          <h2>Notes</h2>
          <table border="1" style={{ marginBottom: "20px" }}>
            <thead>
              <tr>
                <th>Nom du cours</th>
                <th>Valeur</th>
                <th>Action</th>
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
                  <td>
                    <Link onClick={() => handleDeleteNote(note.id)}>
                      Supprimer
                    </Link>
                  </td>
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
