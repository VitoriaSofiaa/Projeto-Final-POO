package com.example.projetofinalpoobackend.Controller;

import com.example.projetofinalpoobackend.Dto.EditDto;
import com.example.projetofinalpoobackend.Dto.LoginDto;
import com.example.projetofinalpoobackend.Dto.RegisterDto;
import com.example.projetofinalpoobackend.Entity.Person;
import com.example.projetofinalpoobackend.Entity.User;
import com.example.projetofinalpoobackend.Service.PersonService;
import com.example.projetofinalpoobackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private PersonService personService;
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity registrar(@RequestBody RegisterDto registerDto){
        User user = new User();
        user.setEmail(registerDto.email);
        user.setPassword(registerDto.senha);
        userService.register(user);

        Person person = new Person();
        person.setAddress(registerDto.endereco);
        person.setAge(registerDto.idade);
        person.setDocument(registerDto.documento);
        person.setWeigth(registerDto.peso);
        person.setHeight(registerDto.altura);
        person.setName(registerDto.nome);
        person.setPhone(registerDto.telefone);
        person.setUserId(userService.findByEmail(registerDto.email));
        personService.save(person);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDto loginDto){
        Optional<User> userOptional = userService.getById(loginDto);
        if(userOptional.isPresent()){
          return ResponseEntity.ok(userOptional);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/person")
    public ResponseEntity personalData(@RequestParam String email){
        User user = userService.findByEmail(email);
        Optional<Person> person = personService.getByUser(user);
        if(person.isPresent()){
            return ResponseEntity.ok(person);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/edit")
    public ResponseEntity editPerson(@RequestParam String email, @RequestBody EditDto editDto){
        User user = userService.findByEmail(email);
        Optional<Person> person = personService.getByUser(user);
        if(person.isPresent()){
            person.get().setAge(editDto.idade);
            person.get().setHeight(editDto.altura);
            person.get().setWeigth(editDto.peso);
            personService.save(person.get());

            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
