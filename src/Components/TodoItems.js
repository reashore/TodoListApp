import React, { Component } from 'react';
import './App.css';

class TodoItems extends Component {
  render() {
      var todoEntries = this.props.entries;

      function createTasks(item){
          return <li key={item.key}></li>
      }

      var listItems = todoEntries.map(createTasks);

      return (
        <ul className="theList">
            {listItems}
        </ul>
      )
  }
}

export default TodoItems;