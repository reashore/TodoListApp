import React, { Component } from 'react';
import '../App.css';

class TodoItems extends Component {
  render(){
      function createTasks(item){
          let key = item.key;
          let text = item.text;

          //console.log(`key = ${key}`);

          return (
            <li key={key}>{text}</li>
        );
      }

      return (
        <ul className="theList">
            {this.props.entries.map(createTasks)}
        </ul>
      );
  }
}

export default TodoItems;