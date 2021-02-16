import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../../components/AddTodo/AddTodo";
import Todo from "../../components/Todo/Todo";

const Home = () => {
    const [todos, setTodos] = useState([]);
    // const check = useRef("Hello");
  
    // let check = "Hello";
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
      <>
        <AddTodo onAdd={addTodo} />
        {todos.map((todo) => (
          <Link to={`/todos/${todo.id}`} key={todo.id}>
            <Todo id={todo.id} title={todo.title} />
          </Link>
        ))}
      </>
    );
  };
  

  export default Home;