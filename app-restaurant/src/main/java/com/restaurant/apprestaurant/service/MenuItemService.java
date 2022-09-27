package com.restaurant.apprestaurant.service;

import com.restaurant.apprestaurant.model.MenuItem;
import com.restaurant.apprestaurant.model.User;
import com.restaurant.apprestaurant.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class MenuItemService {
    @Autowired
    MenuItemRepository menuItemRepository;

    public Page<MenuItem> findAll(Pageable page){

        return menuItemRepository.findAll(page);
    }

    public MenuItem findById(Long id){
        return menuItemRepository.findById(id).get();
    }

    public void deleteById(Long id){
        menuItemRepository.deleteById(id);
    }

    public MenuItem save(MenuItem menuItem){
        if(menuItem.getId() == -1)
            return  menuItemRepository.save(menuItem);
        else
        {
            MenuItem m = menuItemRepository.findById(menuItem.getId()).get();
            m.setName(menuItem.getName());
            m.setCategory(menuItem.getCategory());
            m.setPrice(menuItem.getPrice());
            return menuItemRepository.save(m);
        }
    }

    public List<MenuItem> filterByName(String name){
        return menuItemRepository.findByNameContaining(name);
    }
}
