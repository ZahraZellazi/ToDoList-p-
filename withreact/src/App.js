import './App.css'
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = task => {
    const newTodo = {
      task: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
