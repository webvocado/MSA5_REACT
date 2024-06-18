import React from 'react'
import Read from '../components/board/Read'
import { useState, useEffect } from 'react'
import * as boards from '../apis/boards'

const ReadContainer = ({ no }) => {
  // 🧊 state
  const [board, setBoard] = useState({})
  const [isLoading, setLoading] = useState(false)

  // 🌞 이벤트 함수
  const getBoard = async () => {
    // ⌚ 로딩 시작
    setLoading(true)
    const response = await boards.select(no)
    const data = await response.data      // ⭐board 객체가 들어있다.
    console.log(data);
    setBoard(data)
    setLoading(false)
    // ⌚ 로딩 끝
  }

  // ❓ hook
  useEffect( () => {
    getBoard()
  }, [])  // 마운트가 될 때 안의 콜백함수 호출

  return (
    <>
      <Read no={no} board={board} isLoading={isLoading} />
    </>
  )
}

export default ReadContainer