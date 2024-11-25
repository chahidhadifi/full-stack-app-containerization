package com.api.sms.service;

import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import com.api.sms.model.*;
import com.api.sms.repository.*;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    public List<Note> getNotesByEtudiantId(Long etudiantId) {
        return noteRepository.findByEtudiantId(etudiantId);
    }
}