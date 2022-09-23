package com.restaurant.apprestaurant.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    public User(){

    }

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    public User(Long id, String username, String password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

}
