import React from 'react';
import TodoList from './components/reducers/todoList';
import Header from './components/reducers/header'
import './App.css';
import Todo from './components/reducers/todo';

function App() {

  return (
    <>
      <Header />
      <Todo />
      <TodoList/>          
  </>
  );
}

export default App;
