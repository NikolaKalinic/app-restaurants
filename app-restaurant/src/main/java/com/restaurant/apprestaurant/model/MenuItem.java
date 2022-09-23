package com.restaurant.apprestaurant.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private double price;

    @ManyToOne
    private Category category;

    public MenuItem(){}

    public MenuItem(String name,double price, Category category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    public MenuItem(Long id, String name,double price, Category category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }





}
