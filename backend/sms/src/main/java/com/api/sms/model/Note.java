package com.api.sms.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomDuCours;

    private Double valeurDeNote;

    @ManyToOne
    @JoinColumn(name = "etudiant_id")
    @JsonBackReference
    private Etudiant etudiant;

    public Note() {
    }

    public Note(Long id, String nomDuCours, Double valeurDeNote, Etudiant etudiant) {
        this.id = id;
        this.nomDuCours = nomDuCours;
        this.valeurDeNote = valeurDeNote;
        this.etudiant = etudiant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomDuCours() {
        return nomDuCours;
    }

    public void setNomDuCours(String nomDuCours) {
        this.nomDuCours = nomDuCours;
    }

    public Double getValeurDeNote() {
        return valeurDeNote;
    }

    public void setValeurDeNote(Double valeurDeNote) {
        this.valeurDeNote = valeurDeNote;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }
}
