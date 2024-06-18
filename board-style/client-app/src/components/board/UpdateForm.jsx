import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../board/css/update.module.css'

const UpdateForm = ({ no, board, onUpdate, onDelete, isLoading }) => {

  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeWriter = (e) => {
    setWriter(e.target.value)
  }
  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    onUpdate(no, title, writer, content)
  }

  const handleDelete = () => {
    const check = window.confirm("정말로 삭제하시겠습니까?")
    if (check) {
      onDelete(no)
    }
  }

  useEffect(() => {
    if (board) {
      setTitle(board.title)
      setWriter(board.writer)
      setContent(board.content)
    }
  }, [board])
  //  [의존하는 객체]
  // : 지정한 객체가 변화했을떄, 다시 useEffect 를 실행한다.

  return (
    <div className='container'>
      <h1 className='title'>게시글 수정</h1>
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
                <td>제목</td>
                <td>
                  <input type="text" value={title} onChange={handleChangeTitle} 
                         className={ styles.formInput } />
                </td>
              </tr>
              <tr>
                <td>작성자</td>
                <td>
                  <input type="text" value={writer} onChange={handleChangeWriter}
                         className={ styles.formInput } />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>내용</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <textarea name="" id="" cols="40" rows="10" value={content} onChange={handleChangeContent}
                            className={ styles.formInput } ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        )
      }

      <hr />
      <div className="btn-box">
        <div className='item'>
          <Link to="/boards" className='btn'>목록</Link>
        </div>
        <div className='item'>
          <button className='btn' onClick={handleDelete}>삭제</button>
          <button className='btn' onClick={onSubmit}>수정</button>
        </div>
      </div>

    </div>
  )
}

export default UpdateForm