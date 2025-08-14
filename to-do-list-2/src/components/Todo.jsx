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

    const styleInput = {
        padding: ".7rem",
        width: "200px",
    };

    function handleSubmitTodo(e) {
        e.preventDefault();

        if (inputTodo.trim() === "") return;

        setTodos((prev) => [...prev, { id: v4(), text: inputTodo.trim(), done: false }]);
        setInputTodo("");
    }

    function handleDeleteTodo(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    function handleIsDone(id) {
        setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === id ? { ...todo, done: !false } : todo)));
    }

    function handleEditTodo(id, text) {
        setEditId(id);
        setEditText(text);
    }
    function handleCancelEdit() {
        setEditId(null)
        setEditText("")
    }
    
    function handleUpdateEdit(e) {
        e.preventDefault();
        
        setTodos(prevTodo => prevTodo.map(todo => todo.id === editId? {...todo, text: editText.trim()}: todo))
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
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} autoFocus/>
                                <button type="submit" onClick={handleUpdateEdit}>📑</button>
                                <button type="submit" onClick={handleCancelEdit}>✖</button>
                            </form>
                        ) : (
                            <div>
                                {todo.done === true ? <span style={{ color: "Highlight", marginInline: "1rem" }}>{todo.text}</span> : <span style={{ marginInline: "1rem" }}>{todo.text}</span>}
                                <button type="button" onClick={() => handleIsDone(todo.id)}>
                                    ✔
                                </button>
                                <button type="button" onClick={() => handleEditTodo(todo.id, todo.text)}>
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
