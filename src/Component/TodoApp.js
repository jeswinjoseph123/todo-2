import React, { Component } from "react";
import "./TodoApp.css";

export default class Todo extends Component {
  state = {
    input: "",
    items: [],
  };
  handle = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  store = (e) => {
    e.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  delete = (index) => {
    const allItems = this.state.items;

    allItems.splice(index, 1);

    this.setState({
      items: allItems,
    });
  };
  render() {
    const { input, items } = this.state;

    return (
      <div className="container">
        <form className="input" onSubmit={this.store}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handle}
            placeholder="Enter Items..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fas fa-trash-alt"
                onClick={() => this.delete(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
