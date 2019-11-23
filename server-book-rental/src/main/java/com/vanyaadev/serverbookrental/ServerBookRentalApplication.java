package com.vanyaadev.serverbookrental;

import com.vanyaadev.serverbookrental.model.Book;
import com.vanyaadev.serverbookrental.model.User;
import com.vanyaadev.serverbookrental.repo.BookRepository;
import com.vanyaadev.serverbookrental.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ServerBookRentalApplication /*implements CommandLineRunner*/ {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(ServerBookRentalApplication.class, args);
    }


//    @Override
//    public void run(String... args) throws Exception {
//        userRepository.save(new User("vanyaaboss",passwordEncoder.encode("12345678"),"USER",""));
//        userRepository.save(new User("vanyaaboss2",passwordEncoder.encode("12345678"),"ADMIN",""));
//
//    }
}
