package com.api.sms.model;

import java.time.*;
import java.util.*;
import com.fasterxml.jackson.annotation.*;
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
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime dateDeCreation;

    @OneToMany(mappedBy = "etudiant")
    @JsonManagedReference
    private List<Note> notes;

    public Etudiant() {
        this.dateDeCreation = LocalDateTime.now();
    }

    public Etudiant(String nom) {
        this.nom = nom;
        this.dateDeCreation = LocalDateTime.now();
    }

}
