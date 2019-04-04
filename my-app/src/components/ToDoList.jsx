import React, { useState, useEffect } from "react";
import '../App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            className="todo box sb1"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <div onClick={() => completeTodo(index)} id="completed"> <i className="fas fa-check"></i></div>
                <div onClick={() => removeTodo(index)} id="remove"><i className="fas fa-times"></i></div>
            </div>
        </div>
    )
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} id="todo-form">
            <input type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)} />
        </form>
    );
} 

var i = 1;
function ToDoList() {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        saveTodo()
    })

    const [todos, setTodos] = useState([
        {
            text: "Someone get bugspray!",
            isCompleted: false
        },
        {
            text: "I'll get it!",
            isCompleted: false
        },
        {
            text: "Als, pringles",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    function saveTodo() {
        window.fetch('/todo/create_todo', {
            method: 'POST',
            body: JSON.stringify(
                { todos: todos }
            ),
            headers: { 'Content-Type': 'application/json' }
        }).then(resp => resp.json())
        .then((json) => {
                return true;
              })
        .catch(err => console.log(err))
    }

    return (
        <div className="todo-container">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default ToDoList