import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  addTodo() {
    this.setState((state) => ({
      todos: [...state.todos, state.newTodo],
      newTodo: "",
    }));
  }

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <input value={newTodo} onChange={this.handleChange} />
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
