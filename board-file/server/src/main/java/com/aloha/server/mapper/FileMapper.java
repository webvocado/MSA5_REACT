package com.aloha.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.server.dto.Files;

@Mapper
public interface FileMapper {
    
    public List<Files> list() throws Exception;
    public Files select(int no) throws Exception;
    public int update(Files file) throws Exception;
    public int insert(Files file) throws Exception;
    public int delete(int no) throws Exception;


    // 파일 목록 - 부모 기준
    public List<Files> listByParent(Files file) throws Exception;

    // 파일 선택 삭제
    public int deleteFiles(String no) throws Exception;

    // 파일 목록 삭제 - 부모 테이블 기준
    public int deleteByParent(Files file) throws Exception;

}
