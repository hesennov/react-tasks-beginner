import React from "react"


const TodosList = ({ todos, setTodos }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // const handleComplete = (todo) => {
    //     setTodos(
 // todos.map((item) => {
    //             if (item.id === todo.id) {
    //                 return { ...item, completed: !item.completed }
    //             }
    //             return item;
    //         })
    //     );
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    }
    return (
        <di>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} className="list" onClick={(e) => e.preventDefault()} />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleDelete(todo)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </di>
    )
}
export default TodosList      