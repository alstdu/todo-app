import React, { useState } from 'react';
import '../styles/AddTodo.sass';

function AddTodo({ onAdd }) {
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddClick = () => {
    if (newTodo.trim() && dueDate) {
      const newTodoItem = { 
        id: Date.now(), 
        text: newTodo, 
        completed: false, 
        dueDate 
      };
      onAdd(newTodoItem);
      setNewTodo('');
      setDueDate('');
    }
  };

  return (
    <div className="add-todo">
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default AddTodo;
