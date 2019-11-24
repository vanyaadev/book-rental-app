package com.vanyaadev.serverbookrental.controller;

import com.vanyaadev.serverbookrental.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {
    @Autowired
    BookRepository bookRepository;

    @GetMapping("homepage")
    public String home(){
        return "Homepage";
    }

    @CrossOrigin
    @GetMapping("books")
    public List books(){
        return bookRepository.findAll();
    }
}
