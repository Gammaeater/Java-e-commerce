package com.example.demo.repository;

import com.example.demo.model.OrderProduct;
import com.example.demo.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}