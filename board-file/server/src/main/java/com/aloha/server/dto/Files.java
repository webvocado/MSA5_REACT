package com.aloha.server.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Files {
    private int no;                        // 파일 번호
    private String parentTable;            // 부모 테이블명
    private int parentNo;                  // 부모 테이블에서의 번호
    private String fileName;               // 저장된 파일명
    private String originName;             // 원본 파일명
    private String filePath;               // 파일 경로
    private long fileSize;                  // 파일 크기
    private Date regDate;             // 등록일시
    private Date updDate;             // 수정일시
    private int fileCode;                  // 파일 코드

    MultipartFile file;

}

