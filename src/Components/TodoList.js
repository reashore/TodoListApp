import React, { Component } from 'react';
import TodoItems from './TodoItems';
import '../App.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(event){
        //debugger;
        let itemsArray = this.state.items;

        itemsArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemsArray
        })

        this._inputElement.value = "";

        event.preventDefault();
    }

    render(){
      return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder="Enter task"/>
                    <button type="submit">Add</button>
                </form>
            </div>

            <TodoItems entries={this.state.items}/>
        </div>
      );
    }
  }
  
  export default TodoList;
  
