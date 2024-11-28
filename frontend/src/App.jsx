import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EtudiantList from "./components/EtudiantList";
import EtudiantDetails from "./components/EtudiantDetails";
import AjouterNote from "./components/AjouterNote";
import AjouterEtudiant from "./components/AjouterEtudiant";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EtudiantList />} />
        <Route path="/etudiants/:id" element={<EtudiantDetails />} />
        <Route path="/etudiants/:id/ajouter-note" element={<AjouterNote />} />
        <Route path="/ajouter-etudiant" element={<AjouterEtudiant />} />
      </Routes>
    </Router>
  );
};

export default App;
