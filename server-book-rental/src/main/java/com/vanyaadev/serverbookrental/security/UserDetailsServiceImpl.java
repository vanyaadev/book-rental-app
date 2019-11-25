package com.vanyaadev.serverbookrental.security;

import com.vanyaadev.serverbookrental.model.User;
import com.vanyaadev.serverbookrental.repo.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {


        private UserRepository userRepository;

        public UserDetailsServiceImpl(UserRepository userRepository) {
            this.userRepository = userRepository;
        }


        @Override
        public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
            User user = this.userRepository.findByUsername(s);
            UserDetailsImpl userPrincipal = new UserDetailsImpl(user);

            return userPrincipal;
        }
    }

