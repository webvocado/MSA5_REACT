package com.aloha.todo.dto;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class Todo {
    private int no;            // 할 일 번호
    private String name;       // 할 일 이름
    private int status;        // 할 일 상태 (0: 미완료, 1: 완료)
    private Timestamp regDate; // 등록 일자
    private Timestamp updDate; // 수정 일자
}
