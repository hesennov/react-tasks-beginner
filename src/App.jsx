import React, { useState } from "react";
import Header from "./Component/Header";
import "./App.css";
import Form from "./Component/Form";

const App = ({ input, setInput, todos, setTodos, setEditTodo }) => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
