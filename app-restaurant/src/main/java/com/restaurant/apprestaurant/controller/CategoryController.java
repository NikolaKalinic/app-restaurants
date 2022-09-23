package com.restaurant.apprestaurant.controller;

import com.restaurant.apprestaurant.model.Category;
import com.restaurant.apprestaurant.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping()
    public ResponseEntity<List<Category>> findAll(){
        return  new ResponseEntity<>(categoryService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id){
        try{
            return new ResponseEntity<>(categoryService.findById(id),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Item doesn't exists !",HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id){
        try{
            categoryService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Item doesn't exists !",HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping()
    public ResponseEntity<Category> save(@RequestBody Category category){
        return  new ResponseEntity<>(categoryService.save(category),HttpStatus.OK);
    }


}
