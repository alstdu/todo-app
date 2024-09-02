import React from 'react';
import '../styles/TodoItem.sass';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const dueDate = new Date(todo.dueDate);
  const today = new Date();
  const isOverdue = today > dueDate && !todo.completed;

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />
      <span>{todo.text}</span>
      {todo.dueDate && <span className="due-date">{dueDate.toDateString()}</span>}
      <span className={`priority ${todo.priority.toLowerCase()}`}>{todo.priority}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
