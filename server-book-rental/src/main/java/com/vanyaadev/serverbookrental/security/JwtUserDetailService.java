package com.vanyaadev.serverbookrental.security;

import java.util.ArrayList;

import com.vanyaadev.serverbookrental.model.UserDTO;
import com.vanyaadev.serverbookrental.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailService implements UserDetailsService {

    @Autowired
    PasswordEncoder bcryptEncoder;

    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        com.vanyaadev.serverbookrental.model.User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new User(user.getUsername(), user.getPassword(),
                new ArrayList<>());

    }

    public com.vanyaadev.serverbookrental.model.User save(UserDTO user) {
        com.vanyaadev.serverbookrental.model.User newUser = new com.vanyaadev.serverbookrental.model.User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        return userRepository.save(newUser);
    }
}
