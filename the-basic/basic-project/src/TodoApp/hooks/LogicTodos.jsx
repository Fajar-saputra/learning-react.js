import React, { useState } from "react";

export default function LogicTodo() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Belajar React Basic",
            subtask: [
                { id: 101, task: "Belajar java" },
                { id: 102, task: "Belajar js" },
                { id: 103, task: "Belajar php" },
                { id: 104, task: "Belajar c#" },
            ],
        },
    ]);
    // add todo
    const [inputTodo, setInputTodo] = useState("");
    // edit todo
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    // message error
    const [todoErr, setTodoErr] = useState("");

    const handleErrorTodo = (input) => {
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

        const inputErr = handleErrorTodo(trimmed);
        if (inputErr) {
            setTodoErr(inputErr);
            return;
        }

        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title: trimmed, subtask: [] }]);
        setInputTodo("");
        setTodoErr(null);
    };

    // hapus todo
    const handleDeleteTodos = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    // edit todo
    const handleClickEdit = (id, title) => {
        setEditId(id);
        setEditTodo(title);
        setTodoErr("")
    };

    const handleSaveEdit = () => {
        const trimmed = editTodo.trim();

        const messError = handleErrorTodo(trimmed);
        if (messError) {
            setTodoErr(messError);
            return;
        }

        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === editId ? { ...todo, title: editTodo } : todo)));

        setEditId(null);
        setEditTodo("");
        setTodoErr(null);
    };

    // is editting?
    const handleIsEdit = () => {
        setIsEditing(!false);
    };

    return {
        todos,
        inputTodo,
        setInputTodo,
        handleAddTodos,
        handleDeleteTodos,
        todoErr,
        editId,
        setEditTodo,
        editTodo,
        handleClickEdit,
        handleSaveEdit,
        isEditing,
        handleIsEdit,
    };
}
