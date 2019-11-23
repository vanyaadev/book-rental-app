package com.vanyaadev.serverbookrental.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AuthController {
    @RequestMapping(method = RequestMethod.POST,consumes = "application/json", value = "/registration")
    public void addNewUser(@RequestBody String jsonString) {
        System.out.println(jsonString);

    }


}
