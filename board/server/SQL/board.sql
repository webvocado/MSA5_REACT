CREATE TABLE board (
    no INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    writer VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    regDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updDate DATETIME ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    views INT DEFAULT 0
);


INSERT INTO board (title, writer, content, views) VALUES
('첫 번째 게시글', '홍길동', '이것은 첫 번째 게시글의 내용입니다.', 150),
('두 번째 게시글', '이순신', '두 번째 게시글에 대한 설명입니다.', 200),
('세 번째 게시글', '박보검', '여기에는 세 번째 게시글의 자세한 내용이 들어갑니다.', 300),
('네 번째 게시글', '김연아', '네 번째 게시글은 다음과 같은 내용을 담고 있습니다.', 250),
('다섯 번째 게시글', '손흥민', '다섯 번째 게시글의 본문입니다.', 100);



-- 미쳤다 개미쳤다... 제발 데이터베이스는 스네이크케이스 
-- 자바 파일은 파스칼케이스
-- 변수명은 캐멀케이스 제발좀 
-- chat GPT 망할녀석... 제발 보편적인 규약을 지켜서 만들어달라고
-- 니 맘대로 만들지 말고
-- 내가 어디까지 맞춰야돼
SELECT *
FROM board
ORDER BY reg_date DESC;



SELECT *
FROM board
WHERE no = 2;
   
