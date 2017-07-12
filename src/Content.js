import React, { Component } from 'react';
import './Content.css';

import List from './List';
import Input from './Input';

const todosList = [];

class Content extends Component {
    constructor(props) {
        super();
        this.state = { 
            todosList:  todosList
        };
        this.updateTodos = this.updateTodos.bind(this); 
        this.deleteTodo = this.deleteTodo.bind(this); 
    }
    
    updateTodos(newTodo) {
        var updatedTodos = this.state.todosList;
        updatedTodos.push(newTodo);
        this.setState({todosList: updatedTodos})
   }

    deleteTodo(todoToBeDeleted) {
        var updatedTodos = this.state.todosList;
        var index = updatedTodos.indexOf(todoToBeDeleted)
        updatedTodos.splice(index, 1);

        this.setState({
            todosList: updatedTodos
        });
   }

    render() {
        return (
            <div className="Content">
                <Input updateTodos={this.updateTodos}/>
                <List todos={todosList}
                deleteTodo={this.deleteTodo}/>
            </div>
        );
    } 
}

export default Content;
