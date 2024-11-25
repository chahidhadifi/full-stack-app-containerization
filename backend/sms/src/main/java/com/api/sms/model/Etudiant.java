package com.api.sms.model;

import java.time.*;
import java.util.*;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @Column(name = "date_de_creation")
    private LocalDateTime dateDeCreation;

    @OneToMany(mappedBy = "etudiant")
    private List<Note> notes;

    public Etudiant() {
        this.dateDeCreation = LocalDateTime.now();
    }

    public Etudiant(String nom) {
        this.nom = nom;
        this.dateDeCreation = LocalDateTime.now();
    }

}
