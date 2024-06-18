package com.aloha.server.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.server.dto.Files;

@Mapper
public interface BasicMapper {
    
    public List<????> list() throws Exception;
    public Files select(int no) throws Exception;
    public int update(???? ??) throws Exception;
    public int insert(???? ??) throws Exception;
    public int delete(int no) throws Exception;

}
