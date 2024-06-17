package com.aloha.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.todo.dto.Todo;
import com.aloha.todo.mapper.TodoMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    TodoMapper todoMapper;

    @Override
    public List<Todo> list() {
        List<Todo> todoList = todoMapper.list();
        return todoList;
    }

    @Override
    public Todo select(int no) {
        Todo todo = todoMapper.select(no);
        return todo;
    }

    @Override
    public Todo insert(Todo todo) {
        todoMapper.insert(todo);
        
        int newTodoNo = todo.getNo();
        log.info("dasfasdfasdfasddsafasdfdsa :" + newTodoNo);
        Todo newTodo = todoMapper.select(newTodoNo);

        return newTodo;
    }

    @Override
    public int update(Todo todo) {
        int result = todoMapper.update(todo);
        return result;
    }

    @Override
    public int updateAll() {
        int result = todoMapper.updateAll();
        return result;
    }

    @Override
    public int delete(int no) {
        int result = todoMapper.delete(no);
        return result;
    }

    @Override
    public int deleteAll() {
        int result = todoMapper.deleteAll();
        return result;
    }
    
}
