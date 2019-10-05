package com.example.demo.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Product name is required.")
    @Basic(optional = false)
    private String name;

    private Double price;

    private String pictureUrl;

    //all arguments constructor
    //standard getters and setters



}
