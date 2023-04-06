import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodosList from "./TodosList";
const Form = () => {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    // const [editTodo, setEditTodo] = useState(null)

    const onInputChange = (e) => {
        setInput(e.target.value)
    }


    const onFormSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
        setInput("");
    }


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="enter a Todo..." className="task-input" value={input} required onChange={onInputChange} />
                <button className="button-add" type="submit">Add</button>
            </form>
            <TodosList todos={todos} setTodos={setTodos} />
        </>
    )
}
export default Form