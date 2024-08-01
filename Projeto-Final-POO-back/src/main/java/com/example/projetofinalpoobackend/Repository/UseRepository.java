package com.example.projetofinalpoobackend.Repository;

import com.example.projetofinalpoobackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UseRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    @Query(nativeQuery = true,
            value = "SELECT * " +
                        "from tb_user u " +
                        "where u.email=:email " +
                        "   and u.password=:senha")
    Optional<User> login(String email, String senha);
}
