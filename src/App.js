import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle]  = useState('')
  const [detail, setDetail] = useState('')

  const statusOptions = ['未着手', '進行中', '完了'];
  const [inputStatus, setInputStatus] = useState(statusOptions[0]);

  const handleAddTodo = () => {
    if(title.trim() === '') return

    const newTodo ={
      id: Date.now(),
      title: title,
      detail: detail,
      status: inputStatus
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setDetail('')
    setInputStatus(statusOptions[0])
  }

  const handleStatusChange = (id, newStatus) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, status: newStatus} : todo)
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div style={{padding: "20px"}}>
      <h1>Todo List</h1>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="やるべきこと"/>
      <input
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        placeholder="詳細"
        style={{height: "100px", width: "300px"}}/>
      <select
        value={inputStatus}
        onChange={(e) => setInputStatus(e.target.value)}
      >
        {statusOptions.map((option) => (
        <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <button onClick={handleAddTodo}>追加</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-id">
            <span>{todo.id}</span>
            <span > ||| </span>
            <span>{todo.title}</span>
            <br />
            {todo.detail}
            <p>ステータス:{todo.status}</p>
            <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App;
