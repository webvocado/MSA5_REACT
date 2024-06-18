package com.aloha.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.server.dto.Board;
import com.aloha.server.mapper.BoardMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardMapper boardMapper;

    @Override
    public List<Board> list() throws Exception {
       return boardMapper.list();
    }

    @Override
    public Board select(int no) throws Exception {
        return boardMapper.select(no);
    }

    @Override
    public int update(Board board) throws Exception {
        return boardMapper.update(board);
    }

    @Override
    public Board insert(Board board) throws Exception {
        int result = boardMapper.insert(board);
        log.info("result : " + result);
        int newNo = board.getNo();
        Board newBoard = boardMapper.select(newNo);
        return newBoard;
    }

    @Override
    public int delete(int no) throws Exception {
        return boardMapper.delete(no);
    }
    
}
