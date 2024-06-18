package com.aloha.server.service;

import java.util.List;

import com.aloha.server.dto.Board;

public interface BoardService {
    public List<Board> list () throws Exception; 
    public Board select(int no) throws Exception;
    public Board insert(Board board) throws Exception;
    public int update(Board board) throws Exception;
    public int delete(int no) throws Exception;
}
