package com.restaurant.apprestaurant.service;

import com.restaurant.apprestaurant.model.Category;
import com.restaurant.apprestaurant.model.User;
import com.restaurant.apprestaurant.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public User findById(Long id){
        return userRepository.findById(id).get();
    }

    public void deleteById(Long id){
        userRepository.deleteById(id);
    }

    public User save(User user){
        return  userRepository.save(user);
    }

    public User checkCredentials(User user){
        User u = userRepository.findByUsername(user.getUsername());
        if(u == null || !(u.getPassword().equals(user.getPassword()))){
            return null;
        }

        return u;
    }
}
