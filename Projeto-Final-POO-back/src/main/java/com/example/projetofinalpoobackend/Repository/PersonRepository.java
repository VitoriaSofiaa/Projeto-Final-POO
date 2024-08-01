package com.example.projetofinalpoobackend.Repository;

import com.example.projetofinalpoobackend.Entity.Person;
import com.example.projetofinalpoobackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    Optional<Person> findByUserId(User user);
}
