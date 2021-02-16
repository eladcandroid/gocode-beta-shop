import React, { useEffect, useState } from "react";
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
// import './App.css';

// import shuki, {arr1} from './efrat.js'
const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      userId: 0,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <AddTodo onAdd={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
};

export default App;
