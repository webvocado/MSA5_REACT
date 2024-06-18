import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../board/css/read.module.css'

const Read = ({ no, board, isLoading }) => {
  return (
    <div className='container'>
      <h1 className='title'>게시글 조회</h1>
      <h3>번호 : {no}</h3>
      <hr />

      {
        isLoading &&
        <div>
          <img src="/img/loading.webp" alt="loading" width="100%" />
        </div>
      }
      {
        !isLoading && board && (
          <table className={styles.table}>
          <tbody>
            <tr>
              <td>번호</td>
              <td>
                <input type="text" value={no} readOnly
                       className={styles.formInput} />
              </td>
            </tr>
            <tr>
              <td>등록일자</td>
              <td>
                <input type="text" value={board.regDate} readOnly
                       className={styles.formInput} />
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" value={board.title} readOnly 
                       className={styles.formInput} />
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input type="text" value={board.writer} readOnly
                       className={styles.formInput} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>내용</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <textarea cols={40} rows={10} value={board.content} readOnly
                          className={styles.formInput}  ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        )
      }
     
      <hr />
      <div className="btn-box">
        <Link to="/boards" className='btn'>목록</Link>
        <Link to={`/boards/update/${no}`} className='btn'>수정</Link>
      </div>
    </div>
  )
}

export default Read