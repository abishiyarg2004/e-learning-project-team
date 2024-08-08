package com.example.demo.service;
import org.hibernate.usertype.UserCollectionType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.Review;
import com.example.demo.controller.UserController;
import com.example.demo.controller.userrepo;
import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepo;

import java.util.List;
import java.util.Optional;
@Service

public class UserServiceImpl implements UserService {
    
    @Autowired
    private UserRepo userRepo;


    @Override
    public Review createReview(Review review) {
        return userRepo.save(review);
    }

    @Override
    public List<Review> getAllReviews() {
        return userRepo.findAll();
    }

    @Override
    public Optional<Review> getReviewById(Long id) {
        return userRepo.findById(id);
    }

    @Override
    public Review updateReview(Long id, Review review) {
        if (userRepo.existsById(id)) {
            review.setId(id);
            return userRepo.save(review);
        } else {
            throw new RuntimeException("Review not found with id: " + id);
        }
    }

    @Override
    public void deleteReview(Long id) {
        if (userRepo.existsById(id)) {
            userRepo.deleteById(id);
        } else {
            throw new RuntimeException("Review not found with id: " + id);
        }
    }
}


    