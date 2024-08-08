package com.example.learn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.learn.model.ReviewModel;

public interface ReviewRepository extends JpaRepository<ReviewModel,Integer>{

}
