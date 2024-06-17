import React from 'react'

const TodoItem = ({ todo, onToggle, onRemove }) => {
    let {no, name, status} = todo
    status = status == 1 ? true : false

    return (
        <li className='todoItem' key={todo.no}>
            <div className="item">
                {/* ✅ 체크박스 */}
                <input type="checkbox" id={todo.no} 
                       checked={status} 
                       onChange={ () => onToggle(todo) } />  
                       {/* 함수 호출이 아니라 함수 정의를 연결하는 것 그냥 onToggle(todo) 쓰면 함수 호출이다 */}
                <label htmlFor={todo.no}></label>
                <span>{todo.name}</span>
            </div>
            <div className='item'>
                <button className='btn' onClick={ () => onRemove(no)}>삭제</button>
            </div>
        </li>
    )
}

export default TodoItem