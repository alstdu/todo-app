import React, { useState } from 'react';
import '../styles/EditTodo.sass';

function EditTodo({ todo, onSave, onCancel }) {
  const [editedText, setEditedText] = useState(todo.text);
  const [editedDueDate, setEditedDueDate] = useState(todo.dueDate);
  const [editedPriority, setEditedPriority] = useState(todo.priority);

  const handleSaveClick = () => {
    onSave(todo.id, editedText, editedDueDate, editedPriority);
  };

  return (
    <div className="edit-todo">
      <input 
        type="text" 
        value={editedText} 
        onChange={(e) => setEditedText(e.target.value)}
      />
      <input 
        type="date" 
        value={editedDueDate} 
        onChange={(e) => setEditedDueDate(e.target.value)}
      />
      <select 
        value={editedPriority} 
        onChange={(e) => setEditedPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditTodo;
