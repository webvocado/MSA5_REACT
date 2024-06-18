import React from 'react'
import Read from '../components/board/Read'
import { useState, useEffect } from 'react'
import * as boards from '../apis/boards'
import * as files from '../apis/files'

const ReadContainer = ({ no }) => {
  // 🧊 state
  const [board, setBoard] = useState({})
  const [fileList, setFileList] = useState([])
  const [isLoading, setLoading] = useState(false)

  // 🌞 이벤트 함수
  const getBoard = async () => {
    // ⌚ 로딩 시작
    setLoading(true)
    const response = await boards.select(no)
    const data = await response.data      // ⭐ 🎫board + 📄fileList 객체가 들어 있다.

    const board = data.board
    const fileList = data.fileList
    
    setBoard(board)
    setFileList(fileList)

    setLoading(false)
    // ⌚ 로딩 끝
  }

  // 다운로드 
  const onDownload = async (no, fileName) => {
    const response = await files.download(no)
    console.log(response);

    // 서버에서 반환된 파일 데이터를 Blob으로 변환
    // 브라우저에 데이터를 a 태그로 등록하고 다운로드하도록 요청
    const url = window.URL.createObjectURL(new Blob( [response.data] ))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ❓ hook
  useEffect( () => {
    getBoard()
  }, [])  // 마운트가 될 때 안의 콜백함수 호출

  return (
    <>
      <Read no={no} 
            board={board} 
            fileList={fileList} 
            isLoading={isLoading}
            onDownload={onDownload} />
    </>
  )
}

export default ReadContainer