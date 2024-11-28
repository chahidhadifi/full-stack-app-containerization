package com.api.sms.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import com.api.sms.model.*;
import com.api.sms.service.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1/notes")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return noteService.saveNote(note);
    }

    @GetMapping("/etudiants/{etudiantId}")
    public List<Note> getNotesByEtudiantId(@PathVariable Long etudiantId) {
        return noteService.getNotesByEtudiantId(etudiantId);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
    }

}