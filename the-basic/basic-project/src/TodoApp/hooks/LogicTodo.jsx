import React, { useState } from "react";

export default function LogicTodo() {
    const [todos, setTodos] = useState([{ id: 1, title: "Belajar React Basic", subtask: [] }]);
    // add todo
    const [inputTodo, setInputTodo] = useState("");
    // edit todo
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    // message error
    const [messageErr, setMessageErr] = useState("");

    const handleError = (inputTrimmed) => {
        const input = inputTrimmed.trim();

        // 1. Cek apakah kosong
        if (input === "") {
            return "Input tidak boleh kosong";
        }

        // 2. Cek apakah terlalu pendek
        if (input.length < 5) {
            return "Minimal 5 karakter!";
        }

        // 3. Cek apakah duplikat (kecuali kalau sedang edit item itu sendiri)
        const duplicated = todos.some((todo) => todo.id !== editId && todo.title.toLowerCase() === input.toLowerCase());

        if (duplicated) {
            return "Input sudah ada!";
        }

        return null; // Tidak ada error
    };

    // add todo
    const handleAddTodos = (e) => {
        e.preventDefault();

        const trimmed = inputTodo.trim();
        
        const inputErr = handleError(trimmed);
        if (inputErr) {
            setMessageErr(inputErr);
        }

        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title: trimmed, subtask: [] }]);
        setInputTodo("");
        setMessageErr("")
    };

    // hapus todo
    const handleDeleteTodos = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    // edit todo
    const handleClickEdit = (id, title) => {
        setEditId(id)
        setEditTodo(title);
    }

    const handleSaveEdit = () => {
        setTodos(prevTodos => 
             prevTodos.map(todo => todo.id === editId? {...todo, title: editTodo} : todo)
        )
    }


    return {
        todos,
        inputTodo,
        setInputTodo,
        handleAddTodos,
        handleDeleteTodos,
        messageErr,
        setEditTodo,
        editTodo,
        handleClickEdit,
        handleSaveEdit
    };
}
