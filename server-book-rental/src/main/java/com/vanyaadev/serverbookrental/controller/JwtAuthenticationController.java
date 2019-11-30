package com.vanyaadev.serverbookrental.controller;

import java.util.Objects;

import com.vanyaadev.serverbookrental.model.UserDTO;
import com.vanyaadev.serverbookrental.repo.UserRepository;
import com.vanyaadev.serverbookrental.security.JwtRequest;
import com.vanyaadev.serverbookrental.security.JwtResponse;
import com.vanyaadev.serverbookrental.security.JwtTokenUtil;
import com.vanyaadev.serverbookrental.security.JwtUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailService userDetailService;

    @RequestMapping(value = "/authentication", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        String userName = authenticationRequest.getUsername();
        String password = authenticationRequest.getPassword();
        authenticate(userName, password);

        final UserDetails userDetails = userDetailService
                .loadUserByUsername(userName);

        final String token = jwtTokenUtil.generateToken(userDetails);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Role", userRepository.findByUsername(userName).getRoles());
        ResponseEntity responseEntity = new ResponseEntity(new JwtResponse(token),headers, HttpStatus.OK);

        return responseEntity;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
        return ResponseEntity.ok(userDetailService.save(user));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}