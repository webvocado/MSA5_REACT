package com.aloha.product.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.product.dto.Product;

@Mapper
public interface ProductMapper {
    
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
