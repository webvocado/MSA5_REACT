package com.aloha.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.todo.dto.Todo;

@Mapper
public interface TodoMapper {

    // Todo 목록 조회
    public List<Todo> list();

    // Todo 조회
    public Todo select(int no);

    // Todo 등록
    public int insert(Todo todo);
    // ⭐ mapper 에서 int 받아야 해서 얘는 Todo 가 리턴타입이 아니다.

    // Todo 수정 [완료상태 1]
    public int update(Todo todo);

    // Todo 전체 수정 [완료상태 1]
    public int updateAll();

    // Todo 삭제
    public int delete(int no);

    // Todo 전체삭제
    public int deleteAll();

}