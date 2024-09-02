import React, { useState } from 'react';
import '../styles/AddTodo.sass';

function AddTodo({ onAdd }) {
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddClick = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        dueDate: dueDate,
        priority: priority,
      };
      onAdd(newTodoItem);
      setNewTodo('');
      setDueDate('');
      setPriority('Low');
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
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default AddTodo;
