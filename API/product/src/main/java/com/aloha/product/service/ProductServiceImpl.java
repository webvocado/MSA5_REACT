package com.aloha.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.product.dto.Product;
import com.aloha.product.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductMapper productMapper;

    @Override
    public List<Product> list() {
        List<Product> productList = productMapper.list();
        return productList;
    }

    @Override
    public Product select(String id) {
        Product product = productMapper.select(id);
        return product;
    }

    @Override
    public int insert(Product product) {
        int result = productMapper.insert(product);
        return result;
    }

    @Override
    public int update(Product product) {
        int result = productMapper.update(product);
        return result;
    }

    @Override
    public int delete(String id) {
        int result = productMapper.delete(id);
        return result;
    }
    
}
