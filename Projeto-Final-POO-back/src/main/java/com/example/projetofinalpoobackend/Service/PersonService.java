package com.example.projetofinalpoobackend.Service;

import com.example.projetofinalpoobackend.Entity.Person;
import com.example.projetofinalpoobackend.Entity.User;
import com.example.projetofinalpoobackend.Repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person save(Person person){return personRepository.save(person);}

    public Optional<Person> getByUser(User user){return personRepository.findByUserId(user);}
}
