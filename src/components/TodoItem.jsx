import React from 'react';
import '../styles/TodoItem.sass';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const dueDateTime = todo.dueDate ? new Date(todo.dueDate) : null;
  const isOverdue = dueDateTime && !todo.completed && new Date() > dueDateTime;

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />
      <span>{todo.text}</span>
      {dueDateTime && (
        <span className="due-date-time">
          {dueDateTime.toLocaleDateString()} {dueDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      )}
      <span className={`priority ${todo.priority.toLowerCase()}`}>{todo.priority}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
