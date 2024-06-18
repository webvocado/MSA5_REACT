import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../board/css/update.module.css'

const UpdateForm = ({ no, board, onUpdate, onDelete, isLoading }) => {

  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null)    // files state 추가


  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeWriter = (e) => {
    setWriter(e.target.value)
  }
  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }
  // ✅ 파일 핸들러 추가
  const handleChangeFile = (e) => {
    setFiles(e.target.files)
  }



  const onSubmit = () => {

    // 파일 업로드에서는 
    // Content-type : application/json ➡ multipart/form-data
    const formData = new FormData()
    formData.append('title', title)
    formData.append('writer', writer)
    formData.append('content', content)
    formData.append('no', no)

    // 📄 파일 데이터 추가
    if( files ) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formData.append('files', file)
      }
    }

    // 🎫 헤더
    const headers = {
      'Content-Type' : 'multipart/form-data'
    }

    // onUpdate(no, title, writer, content)
    onUpdate(formData, headers)               // formData
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
              <tr>
                <td>파일</td>
                <td>
                  <input type="file" onChange={handleChangeFile} multiple />
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