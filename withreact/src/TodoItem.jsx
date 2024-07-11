
import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
