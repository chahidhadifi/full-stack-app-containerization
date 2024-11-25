package com.api.sms.service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import com.api.sms.model.*;
import com.api.sms.repository.*;
import java.util.*;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    public Etudiant saveEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    public Etudiant getEtudiantById(Long id) {
        return etudiantRepository.findById(id).orElse(null);
    }
}