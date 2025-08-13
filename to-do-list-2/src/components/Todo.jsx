import { useState } from "react";
import { v4 } from "uuid";

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Belajar React Dasar", done: false },
        { id: 2, text: "Belajar React Lanjutan", done: false },
        { id: 3, text: "Belajar State Management", done: false },
    ]);
    const [inputTodo, setInputTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    function handleAddTodo(e) {
        e.preventDefault();
        if (!inputTodo.trim()) return;

        setTodos((prevTodo) => [
            ...prevTodo,
            { id: v4(), text: inputTodo.trim(), done: false },
        ]);
        setInputTodo("");
    }

    function handleDeleteTodo(id) {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
    }

    function handleToggleDone(id) {
        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    function handleEditTodo(id, text) {
        setEditId(id);
        setEditText(text);
    }

    function handleUpdateTodo(e) {
        e.preventDefault();
        if (!editText.trim()) return;
        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id === editId ? { ...todo, text: editText } : todo
            )
        );
        setEditId(null);
        setEditText("");
    }

        const styleInput = {
        padding: ".7rem",
        width: "200px",
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input
                style={styleInput}
                    type="text"
                    placeholder="Enter Todo..."
                    value={inputTodo}
                    onChange={(e) => setInputTodo(e.target.value)}
                />
                <button type="submit">➕</button>
            </form>
            <ol>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {editId === todo.id ? (
                            <form onSubmit={handleUpdateTodo} style={{ display: "inline" }}>
                                <input
                                style={styleInput}
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    autoFocus
                                />
                                <button type="submit">💾</button>
                                <button type="button" onClick={() => setEditId(null)}>❌</button>
                            </form>
                        ) : (
                            <>
                                <span onClick={() => handleToggleDone(todo.id)} style={{ cursor: "pointer" }}>
                                    {todo.text}
                                </span>
                                <button onClick={() => handleEditTodo(todo.id, todo.text)}>✏️</button>
                                <button onClick={() => handleDeleteTodo(todo.id)}>🗑️</button>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}




