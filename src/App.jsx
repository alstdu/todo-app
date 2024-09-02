import React from 'react';
import TodoList from './components/TodoList';
import '../src/styles/TodoList.sass';

function App() {
  console.log('App rendered');
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
