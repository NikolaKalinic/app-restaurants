package com.restaurant.apprestaurant.repository;

import com.restaurant.apprestaurant.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {

    public List<MenuItem> findByNameContaining(String name);

}
