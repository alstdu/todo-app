import React, { useState } from 'react';
import '../styles/EditTodo.sass';

function EditTodo({ todo, onSave, onCancel }) {
  const [editedText, setEditedText] = useState(todo.text);

  const handleSaveClick = () => {
    onSave(todo.id, editedText);
  };

  return (
    <div className="edit-todo">
      <input 
        type="text" 
        value={editedText} 
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditTodo;
