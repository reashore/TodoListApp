import React, { Component } from 'react';
import TodoList from './Components/TodoList'
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <h1>Todo List App</h1>
          <TodoList/>
      </div>
    );
  }
}

export default App;
