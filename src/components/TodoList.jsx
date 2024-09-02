import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';
import AddTodo from './AddTodo';
import '../styles/TodoList.sass';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (newTodoItem) => {
    const updatedTodos = [...todos, newTodoItem];
    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  const handleSave = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditingTodo(null);
  };

  const handleCancel = () => {
    setEditingTodo(null);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      {editingTodo ? (
        <EditTodo 
          todo={editingTodo}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggle(todo.id)}
            onDelete={() => handleDelete(todo.id)}
            onEdit={() => handleEdit(todo.id)}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
