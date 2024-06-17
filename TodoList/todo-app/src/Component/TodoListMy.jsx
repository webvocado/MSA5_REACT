// import React, { useEffect, useState } from 'react';
// import Todo from './TodoMy';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:8080/todos');
//         const data = await response.json();
//         setTodos(data);  // list state 를 업데이트 => componentDidUpdate
//         console.log(data);
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className='container'>
//         <h1 className="todo-title">To Do List</h1>
//         <div className='todo-input-wrap'>
//           <div className='todo-input-wrap2'>
//             <input type="text" className='todo-input' placeholder='할 일 입력' />
//             <button className='insertBtn'>추가</button>
//           </div>
//         </div>
//         {todos.map((todo, index) => (
//           <Todo key={index} todo={todo} />  // 각 todo 아이템에 대해 Todo 컴포넌트를 렌더링
//         ))}
//         <div className='container-bottom-wrap'> 
//           <div className='container-bottom'>
//               <button className="deleteAllBtn">전체삭제</button>
//               <button className="completeAllBtn">전체완료</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TodoListMy;