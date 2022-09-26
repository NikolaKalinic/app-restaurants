package com.restaurant.apprestaurant.controller;

import com.restaurant.apprestaurant.model.Category;
import com.restaurant.apprestaurant.model.User;
import com.restaurant.apprestaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping()
    public ResponseEntity<List<User>> findAll(){
        return  new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id){
        try{
            return new ResponseEntity<>(userService.findById(id),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Item doesn't exists !",HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id){
        try{
            userService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Item doesn't exists !",HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping()
    public ResponseEntity<User> save(@RequestBody User user){
        return  new ResponseEntity<>(userService.save(user),HttpStatus.OK);
    }
    @PostMapping(value = "/check")
    public ResponseEntity<User> checkCredentials(@RequestBody User user){
        return new ResponseEntity<>(userService.checkCredentials(user),HttpStatus.OK);
    }
}
