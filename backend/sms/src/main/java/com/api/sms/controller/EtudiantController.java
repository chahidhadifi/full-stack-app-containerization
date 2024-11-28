package com.api.sms.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import com.api.sms.model.*;
import com.api.sms.service.*;
import java.time.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1/etudiants")
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;

    @PostMapping
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        etudiant.setDateDeCreation(LocalDateTime.now());
        return etudiantService.saveEtudiant(etudiant);
    }

    @GetMapping
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @GetMapping("/{id}")
    public Etudiant getEtudiant(@PathVariable Long id) {
        return etudiantService.getEtudiantById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteEtudiant(@PathVariable Long id) {
        etudiantService.deleteEtudiant(id);
    }

}