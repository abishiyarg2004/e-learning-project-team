package com.example.demo.controller;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.UserService;
import com.example.demo.service.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review savedReview = userService.createReview(review);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return userService.getAllReviews();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
         java.util.Optional<Review> review = userService.getReviewById(id);
        return review.map(r -> new ResponseEntity<>(r, HttpStatus.OK))
                     .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        try {
            userService.deleteReview(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
}

    
    

