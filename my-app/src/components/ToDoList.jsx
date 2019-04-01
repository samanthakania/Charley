import React, { useState } from "react";
import './ToDoList.css'

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function ToDoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit = { handleSubmit }>
            <input type = "text" 
            className = "input" 
            value = { value } 
            onChange = { e => setValue(e.target.value) } />
        </form>
    );
}

function ToDoList() {
    const[todos, setTodos] = useState([
        { text: "Learn about React" },
        { text: "Meet friend for lunch" },
        { text: "Build really cool todo app" }
    ])

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                    />
                ))}
            </div>
        </div>
    );
}

export default ToDoList