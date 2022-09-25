package com.restaurant.apprestaurant.service;

import com.restaurant.apprestaurant.model.MenuItem;
import com.restaurant.apprestaurant.model.User;
import com.restaurant.apprestaurant.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemService {
    @Autowired
    MenuItemRepository menuItemRepository;

    public List<MenuItem> findAll(){
        return menuItemRepository.findAll();
    }

    public MenuItem findById(Long id){
        return menuItemRepository.findById(id).get();
    }

    public void deleteById(Long id){
        menuItemRepository.deleteById(id);
    }

    public MenuItem save(MenuItem menuItem){
        return  menuItemRepository.save(menuItem);
    }

    public List<MenuItem> filterByName(String name){
        return menuItemRepository.findByNameContaining(name);
    }
}
