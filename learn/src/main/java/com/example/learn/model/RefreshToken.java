package com.example.learn.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Builder
@Data
@Entity
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String refreshToken;

    @Column()
    private Instant expiryDate;

    

    @OneToOne
    private Usermodel usermodel;
}
