import React from 'react'

const TodoFooter = ({ onRemoveAll, onUpateAll }) => {
  return (
    <div className='footer'>
        <div className='item'>
            <button className='btn' onClick={() => onRemoveAll()}>전체삭제</button>
        </div>
        <div className='item'>
            <button className='btn' onClick={() => onUpateAll()}>전체완료</button>
        </div>
    </div>
  )
}

export default TodoFooter