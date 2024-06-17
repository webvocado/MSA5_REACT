package com.aloha.todo.service;

import java.util.List;

import com.aloha.todo.dto.Todo;

public interface TodoService {

    // Todo 목록 조회
    public List<Todo> list();

    // Todo 조회
    public Todo select(int no);

    // Todo 등록
    public Todo insert(Todo todo);

    // Todo 수정 [완료상태 1]
    public int update(Todo todo);

    // Todo 전체 수정 [완료상태 1]
    public int updateAll();

    // Todo 삭제
    public int delete(int no);

    // Todo 전체삭제
    public int deleteAll();

}
