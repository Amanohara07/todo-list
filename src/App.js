import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText]  = useState('')

  const statusOptions = ['未着手', '進行中', '完了'];

  const handleAddTodo = () => {
    if(text.trim() === '') return

    const newTodo ={
      id: Date.now(),
      text: text
    }
    setTodos([...todos, newTodo])
    setText('')
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
    <div style={{color: "#a2d7dd", padding: "20px"}}>
      <h1>Todo List</h1>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="やるべきこと"/>
      <button onClick={handleAddTodo}>追加</button>

      <ul style={{color: "red"}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span style={{color:"black"}}> ||| </span>
            <span>{todo.text}</span>
            <select
              value={todo.status}
              onChange={(e) => (handleStatusChange(todo.id, e.target.value))}
            >
              {statusOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
            </select>
            <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App;
