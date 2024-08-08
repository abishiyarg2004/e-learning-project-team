package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import com.example.demo.controller.Review;

public interface UserService {
    Review createReview(Review review);
    List<Review> getAllReviews();
    Optional<Review> getReviewById(Long id);
    Review updateReview(Long id, Review review);
    void deleteReview(Long id);
}

