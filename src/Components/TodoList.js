import React, { Component } from 'react';
import '../App.css';

class TodoList extends Component {
    getInitialState() {
        return {
            items: []
        };
    }

    addItem(e){
        var itemsArray = this.state.items;

        itemsArray.push(
            {
                text: this._inputElement.value,
                key: Date.now
            }
        );

        this.setState({
            items: itemsArray
        })

        e.preventDefault();
    }

    render() {
      return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder="Enter task"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default TodoList;
  
