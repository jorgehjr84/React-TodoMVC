import React, { Component } from 'react';
import './List.css';

class List extends Component {
    constructor() {
        super();
        this.state = {
            todoToBeEdited: ''
        }
    }

    editTodos(todo) {
        this.setState({
            todoToBeEdited: todo
        })
    }

    handleEditing(e) {
        if(e.keyCode === 13) {
            this.setState({
                todoToBeEdited: ''
            })
        }
            
    }
  
    render() {
        var todos = this.props.todos.map((todo, i) => {        
            return  <li key={todo}
                    onDoubleClick={this.editTodos.bind(this, todo)}>
                    {
                        this.state.todoToBeEdited === todo ?
                        <div className="todo-item">
                            <input type="checkbox" 
                            className="todo-checkbox">
                            </input>
                            <input value={todo}
                            onKeyDown={this.handleEditing.bind(this)}
                            ></input>
                        </div>
                        :
                        <div className="todo-item">
                            <input type="checkbox" 
                            className="todo-checkbox">
                            </input>
                            <label className="todo-label">{todo}</label>
                            <button className="todo-item-button"
                            onClick={this.props.deleteTodo.bind(this, todo)}>X</button>
                        </div>
                    }
                    </li>
        })
    
        return (    
            <div className="List">
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }  
}

export default List;
