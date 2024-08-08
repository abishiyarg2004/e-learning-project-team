package com.example.learn.controller;


import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.learn.model.ReviewModel;
import com.example.learn.service.ReviewService;

import java.util.List;

@RestController
@RequestMapping("/review")
@CrossOrigin 
public class ReviewController {


     @Autowired
    private ReviewService reviewService;


    @PostMapping
    public ResponseEntity<ReviewModel> createReview(@RequestBody ReviewModel review) {
        ReviewModel savedReview = reviewService.createReview(review);
        return new ResponseEntity<>(savedReview, HttpStatus.CREATED);
    }

    @GetMapping
    public List<ReviewModel> getAllReviews() {
        return reviewService.getAllReviews();
    }


    @GetMapping("/{id}")
    public ResponseEntity<ReviewModel> getReviewById(@PathVariable int id) {
         java.util.Optional<ReviewModel> review = reviewService.getReviewById(id);
        return review.map(r -> new ResponseEntity<>(r, HttpStatus.OK))
                     .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable int id) {
        try {
            reviewService.deleteReview(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    
}
