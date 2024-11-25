package com.api.sms.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomDuCours;

    private Double valeurDeNote;

    @ManyToOne
    @JoinColumn(name = "etudiant_id")
    private Etudiant etudiant;

    public Note() {
    }

    public Note(String nomDuCours, Double valeurDeNote, Etudiant etudiant) {
        this.nomDuCours = nomDuCours;
        this.valeurDeNote = valeurDeNote;
        this.etudiant = etudiant;
    }

}