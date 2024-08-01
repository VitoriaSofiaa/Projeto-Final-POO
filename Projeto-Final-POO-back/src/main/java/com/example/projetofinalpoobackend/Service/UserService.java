package com.example.projetofinalpoobackend.Service;

import com.example.projetofinalpoobackend.Dto.LoginDto;
import com.example.projetofinalpoobackend.Entity.User;
import com.example.projetofinalpoobackend.Repository.UseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UseRepository useRepository;
    public Optional<User> getById(LoginDto loginDto){return useRepository.login(loginDto.email, loginDto.senha);}
    public User findByEmail(String email){return useRepository.findByEmail(email);}
    public void register(User user){
        useRepository.save(user);
    }
}
