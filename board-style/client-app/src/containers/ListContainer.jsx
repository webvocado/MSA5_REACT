import React from 'react'
import List from '../components/board/List'
import { useState, useEffect } from 'react'
import * as boards from '../apis/boards'

const ListContainer = () => {
  // 🧊 state
  const [boardList, setBoardList] = useState([])
  const [isLoading, setLoading] = useState(false)

  // 🌞 이벤트 함수
  const getBoardList = async () => {
    // ⌚ 로딩 시작
    setLoading(true)
    const response = await boards.list()
    const data = await response.data      // ⭐boardList 가 들어있다.
    setBoardList(data)
    setLoading(false)
    // ⌚ 로딩 끝
  }

  // ❓ hook
  useEffect( () => {
    getBoardList()
  }, [])  // 마운트가 될 때 안의 콜백함수 호출

  return (
    <>
      {/* 게시글 목록 */}
      <List boardList={boardList} isLoading={isLoading} />
    </>
  )
}

export default ListContainer