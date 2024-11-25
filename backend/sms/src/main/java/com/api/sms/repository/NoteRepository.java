package com.api.sms.repository;

import java.util.*;
import org.springframework.data.jpa.repository.*;
import com.api.sms.model.*;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByEtudiantId(Long etudiantId);
}