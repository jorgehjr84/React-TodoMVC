import React, { Component } from 'react';
import './Input.css';

class Input extends Component { 
    constructor(props) {
        super();
        this.addTodo = this.addTodo.bind(this); 
    }

    addTodo(e) {
        e.preventDefault();
        var input = e.target.querySelector('input');
        var newTodo = input.value;
        input.value = '';

        this.props.updateTodos(newTodo);
        return false;
  }

  render() {
    return (
        <div className="form">
            <form onSubmit={this.addTodo}>
                <input placeholder={this.props.input}></input>   
            </form>
        </div>
    );
  } 
}

Input.defaultProps = {
    input: 'What needs to be done?'
}

export default Input;
