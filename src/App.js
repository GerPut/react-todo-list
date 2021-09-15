
import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';


const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} setEditTodo={setEdit} editTodo={editTodo} />
        </div>
        <div>
          <TodoList
            todos={todos} setTodos={setTodos} setEditTodo={setEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
