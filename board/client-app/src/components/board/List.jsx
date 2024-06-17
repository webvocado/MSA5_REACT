import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ boardList, isLoading }) => {
  console.log(boardList);
  return (
    <div className='container'>
      <h1>게시글 목록</h1>
      <Link to="/boards/insert">글쓰기</Link>

      {
        isLoading &&
        <div>
          <img src="/img/loading.webp" alt="loading" width="100%" />
        </div>
      }
      {
        !isLoading && boardList && (
          <table border={1}>
            
            <thead>
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>등록일자</td>
              </tr>
            </thead>

            <tbody>
              {boardList.map((board) =>
              (
                <tr key={board.no}>
                  <td>{board.no}</td>
                  <td>
                    <Link to={`/boards/${board.no}`}>
                      {board.title}
                    </Link>
                  </td>
                  <td>{board.writer}</td>
                  <td>{board.regDate}</td>
                </tr>
              )
              )}
            </tbody>

          </table>
        )
      }
    </div>
  )
}

export default List