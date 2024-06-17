package com.aloha.product.service;

import java.util.List;

import com.aloha.product.dto.Product;

public interface ProductService {
    
    // 상품 목록 조회
    public List<Product> list();
    
    // 상품 조회
    public Product select(String id);

    // 상품 등록
    public int insert(Product product);

    // 상품 등록
    public int update(Product product);

    // 상품 삭제
    public int delete(String id);

}
