package com.restaurant.apprestaurant.controller;

import com.restaurant.apprestaurant.model.MenuItem;
import com.restaurant.apprestaurant.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="api/menu-items")
@CrossOrigin(origins = "http://localhost:4200")
public class MenuItemController {

    @Autowired
    MenuItemService menuItemService;

    @GetMapping()
    public ResponseEntity<List<MenuItem>> findAll(){
        return  new ResponseEntity<>(menuItemService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Object> findById(@PathVariable Long id){
        try{
            return new ResponseEntity<>(menuItemService.findById(id),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Item doesn't exists !",HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<Object> deleteById(@PathVariable Long id){
        try{
            menuItemService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Item doesn't exists !",HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping()
    public ResponseEntity<MenuItem> save(@RequestBody MenuItem menuItem){
        return  new ResponseEntity<>(menuItemService.save(menuItem),HttpStatus.OK);
    }
}
