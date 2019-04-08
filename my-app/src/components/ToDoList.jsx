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
function ToDoList(props) {
    let id = props.id

    const [todos, setTodos] = useState([]);
    const [idForList, setIdForList] = useState(null)
    React.useEffect(() => {
        if (props.todoListFound === null) {
            createTodo(id)
        } else {
            setTodos(props.todoListFound)
            setIdForList(id)
        }
    }, []);

    const addTodo = text => {
        const newTodos = { text, isCompleted: false }
        DataBase('/todo/add_todo', 'POST', newTodos)
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        const iso = newTodos[index]
        iso.isCompleted = true;
        DataBase('/todo/update_todo', 'PUT', iso)
    };

    const removeTodo = index => {
        const newtodos = [...todos];
        const iso = newtodos[index]
        DataBase('/todo/destroy_todo', 'DELETE', iso)

    };
    function createTodo(id) {
        window.fetch('/todo/create_todo', {
            method: 'POST',
            body: JSON.stringify(
                { list_id: id }
            ),
            headers: { 'Content-Type': 'application/json' }
        }).then(resp => resp.json())
            .then((json) => {
                let listId = json;
                setIdForList(listId)
                console.log("listId", idForList)
            })
            .catch(err => console.log(err))
    }
    function DataBase(url, rest, todo) {
       
        window.fetch(url, {
            method: rest,
            body: JSON.stringify(
                {
                    todos: todo,
                    list_id: idForList
                }
            ),
            headers: { 'Content-Type': 'application/json' }
        }).then(resp => resp.json())
            .then((json) => {
                format(json)
            })
            .catch(err => console.log(err))

    }
    function format(json) {
        console.log(json);
        let output = []
        json.forEach((item) => {
            let formatter = { text: item.todo_item, isCompleted: item.is_completed }
            output.push(formatter)
        })
        setTodos(output)
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