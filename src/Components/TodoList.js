import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
    render() {
      return (
        <div className="todoListMain">
            <div className="header">
                <form>
                    <input placeholder="Enter task"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default TodoList;
  
