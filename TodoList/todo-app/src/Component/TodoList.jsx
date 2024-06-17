import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todoList, onToggle, onRemove }) => {
    console.log(todoList)
    return (
        <ul className='todoList'>
            {todoList.map((todo) => (
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </ul>
    )
}

export default TodoList