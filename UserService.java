package com.example.learn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.learn.model.Usermodel;
import com.example.learn.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    public UserRepository userRepository;

    public String postuser(Usermodel user){
        userRepository.save(user);
        return "posted";
    }
}
