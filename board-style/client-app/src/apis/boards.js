import axios from 'axios';

// 목록
export const list = () => axios.get('/boards')

// 조회
export const select = (no) => axios.get(`/boards/${no}`)

// 등록
export const insert = (title, writer, content) => axios.post('/boards', {title, writer, content})

// 수정
export const update = (no, title, writer, content) => axios.put('/boards', {no, title, writer, content})
// 경로 맨 뒤에 / 붙어있어서 요청 못했음 404 PUT 에러 뜸


// 삭제 ( 자바스크립트에서는 delete 라는 예악어가 있어서 사용 불가능 )
export const remove = (no) => axios.delete(`/boards/${no}`)