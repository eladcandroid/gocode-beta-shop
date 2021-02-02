import React from 'react';
import Todo from './components/Todo/Todo'
import AddTodo from './components/AddTodo/AddTodo'
// import './App.css';

// import shuki, {arr1} from './efrat.js'
class App extends React.Component {
  state = { todos: [] };
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      userId: 0,
      completed: false,
    };
    this.setState(({ todos }) => ({ todos: [newTodo, ...todos] }));
  };
  render() {
    return (
      <div>
        <AddTodo onAdd={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }
}

export default App;
