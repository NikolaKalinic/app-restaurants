package com.restaurant.apprestaurant.service;

import com.restaurant.apprestaurant.model.Category;
import com.restaurant.apprestaurant.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> findAll(){
        return categoryRepository.findAll();
    }

    public Category findById(Long id){
        return categoryRepository.findById(id).get();
    }

    public void deleteById(Long id){
        categoryRepository.deleteById(id);
    }

    public Category save(Category category){
        return  categoryRepository.save(category);
    }

}
