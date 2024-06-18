import axios from 'axios';

// 업로드
export const upload = (formData, headers) => axios.post(`/files`, formData, headers)

// 다운로드
export const download = (no) => axios.get(`/files/${no}`, {responseType: 'blob' })
