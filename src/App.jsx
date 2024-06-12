// import React, { useReducer, useRef, useState } from 'react';
// import './App.css';
// import { FaTrashAlt } from 'react-icons/fa';
// import { MdEdit } from 'react-icons/md';
// import './TodoApp.css'
// import { type } from '@testing-library/user-event/dist/type';
// function App() {
  

  
// //   const [todos, setTodos] = useState([]);
// //   const [todo, setTodo] = useState("");

// //   const addTodo = (event) => {
// //     event.preventDefault();
// //     if (!todo.trim()) {
// //       alert('Please write a todo');
// //       return;
// //     }

// //     setTodos([...todos, todo]); 
// //     setTodo(''); 
// //   };
// // const deleteTodo=(index)=>{
// //   const newtodo=todos.filter((t,i)=>index!==i)
// //   setTodos(newtodo)
// // }
// // const edittodo= (todo)=>{
// //   const edittodo=prompt("add editid\todo" ,todo)
// //   const editid=todos.findIndex((t)=>todo.id===todo.id)
// //   const newtodos=[...todos]
// //   newtodos.splice(editid,1,edittodo)
// //   setTodos(newtodos)
// // }
//   return (
//     <div className="container">
//       <div className="addTask">
//         <form onSubmit={handlesubmit}> 
//           <input 
//             id="input" 
//             // onChange={(event) => setTodo(event.target.value)} 
//             // value={todo}
//             ref={todoref}
//             type="text" 
//             placeholder="Add your task" 
//           />
//           <button id="add" className="btn">Add Task</button>
//         </form>
//       </div>
      
//       {/* {todos.length !== 0 && ( */}
      
//         {/* <div className="taskList">
//           <ul> */}
//             {/* {todos.map((todo, index) => ( */}
//               {/* <li key={index}> <li> */}
//                 {/* <span>{todo}</span> <span>task</span> */}
//                 {/* <div> */}
//                   {/* <button id="delete" className="btn" onClick={()=>deleteTodo(index)}><FaTrashAlt/></button> */} 
//                   {/* <button id="edit" onClick={()=>edittodo(todo)} className="btn"><MdEdit/></button> */}
//                 {/* </div> */}
//               {/* </li> */}
//             {/* ))} */}
//           {/* </ul> */}
//         {/* </div> */}
//       {/* )} */}
     
//     </div>
//   );
// }

// export default App;
import React, { useReducer, useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import './TodoApp.css';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { type } from '@testing-library/user-event/dist/type';
import {addtodo,edittodo,deletetodo} from './slices/todo.slices.js'
function App() {
  const todos=useSelector((state)=>state.todo)
  console.log(todos);

const dispatch=useDispatch()
  const todoref = useRef();
  
  const handlesubmit=(e)=>{
e.preventDefault()
const todotext=todoref.current.value;
if(!todotext){
  return alert('please enter todo')
}
dispatch(addtodo(todotext))
todoref.current.value=''
  }
const handledelete=(id)=>{
  dispatch(deletetodo(id))
}
const handleedit=(todo)=>{
  dispatch(edittodo(todo))
}
  return (
    <div className="container">
      <div className="addTask">
        <form onSubmit={handlesubmit}>
          <input
            id="input"
            ref={todoref}
            type="text"
            placeholder="Add your task"
          />
          <button id="add" className="btn">Add Task</button>
        </form>
      </div>
      {todos.length !== 0 && (
        <div className="taskList">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span> <span>task</span>
                <div>
                  <button
                    id="delete"
                    className="btn"
                    onClick={()=>handledelete(todo.id)}
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    id="edit"
                   onClick={()=>handleedit(todo)}
                    className="btn"
                  >
                    <MdEdit />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
