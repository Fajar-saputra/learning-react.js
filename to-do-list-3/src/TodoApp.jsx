import { useReducer, useState } from "react";
import { v4 } from "uuid";

export default function TodoApp() {
    const initialTodos = [];

    const [inputTodo, setInputTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const styleInput = {
        padding: ".7rem",
        width: "200px",
    };

    function todoReducer(todos, action) {
        switch (action.type) {
            case "ADD_TODO":
                return [...todos, { id: v4(), text: action.text, done: false }];
            case "UPDATE_TODO":
                return todos.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
            case "DELETE_TODO":
                return todos.filter((todo) => todo.id !== action.id);
            case "TOGGLE_DONE":
                return todos.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
            default:
                return todos;
        }
    }

    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    function handleSubmitTodo(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            text: inputTodo,
        });
        setInputTodo("");
    }
    function handleUpdateTodo(e) {
        e.preventDefault();
        dispatch({ type: "UPDATE_TODO", id: editId, text: editText });
        setEditId(null);
        setEditText("");
    }
    function handleDeleteTodo(id) {
        dispatch({
            type: "DELETE_TODO", id
        });
    }

    function handleIsDone(id) {
        dispatch({
            type: "TOGGLE_DONE", id
        })
    }

    function handleStartUpdateTodo(id,text) {
        setEditId(id)
        setEditText(text)
    }
    
    function handleCancelEdit() {
        setEditId(null)
        setEditText("")
    }

    return (
        <div>
            <h2>Testing Todo</h2>
            <form action="" onSubmit={handleSubmitTodo}>
                <input type="text" placeholder="Enter Todo..." value={inputTodo} style={styleInput} onChange={(e) => setInputTodo(e.target.value)} />
                <button type="submit">➕</button>
            </form>
            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.id === editId ? (
                            <form action="">
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} autoFocus />
                                <button type="submit" onClick={handleUpdateTodo}>
                                    📑
                                </button>
                                <button type="submit" onClick={handleCancelEdit}>
                                    ✖
                                </button>
                            </form>
                        ) : (
                            <div>
                                {todo.done === true ? <span style={{ color: "Highlight", marginInline: "1rem" }}>{todo.text}</span> : <span style={{ marginInline: "1rem" }}>{todo.text}</span>}
                                <button type="button" onClick={() => handleIsDone(todo.id)}>
                                    ✔
                                </button>
                                <button type="button" onClick={() => handleStartUpdateTodo(todo.id, todo.text)}>
                                    ⚙
                                </button>
                                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                    🗑
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}
