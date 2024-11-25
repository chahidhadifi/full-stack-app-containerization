package com.api.sms.repository;

import org.springframework.data.jpa.repository.*;
import com.api.sms.model.*;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
}