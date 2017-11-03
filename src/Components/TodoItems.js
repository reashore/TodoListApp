import React, { Component } from 'react';
import '../App.css';

class TodoItems extends Component {
  render(){
      var todoEntries = this.props.entries;

      function createTasks(item){
          var key = item.key;
          var text = item.text;

          return (
            <li key={key}>{text} : {key}</li>
        );
      }

      var listItems = todoEntries.map(createTasks);

      return (
        <ul className="theList">
            {/* // bug duplicate keys on list items */}
            {listItems}
            {/* {this.props.entries.map(createTasks)} */}
        </ul>
      );
  }
}

export default TodoItems;