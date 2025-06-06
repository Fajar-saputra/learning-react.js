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
    const [messageErr, setMessageErr] = useState("");
    // add subtasks
    const [inputTask, setInputTask] = useState("");
    const [showInput, setShowInput] = useState(false);

    const handleError = (input) => {
        // 1. Cek apakah kosong
        if (input === "") {
            return "Input tidak boleh kosong";
        }

        // 2. Cek apakah terlalu pendek
        if (input.length < 4) {
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
            return;
        }

        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title: trimmed, subtask: [] }]);
        setInputTodo("");
        setMessageErr(null);
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
        setMessageErr(null);
    };

    const handleSaveEdit = () => {
        const trimmed = editTodo.trim();

        const messError = handleError(trimmed);
        if (messError) {
            setMessageErr(messError);
            return;
        }

        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === editId ? { ...todo, title: editTodo } : todo)));

        setEditId(null);
        setEditTodo("");
        setMessageErr(null);
    };

    // is editting?
    const handleIsEdit = () => {
        setIsEditing(!false);
    };
    // add task
    const handleAddTasks = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...prevTodos,
                        subtask: [...task, { id: Date.now(), task: inputTask }],
                    };
                }
                return todo;
            })
        );
    };

    const handleIsShow = () => {
        setShowInput(!false);
    }

    return {
        todos,
        inputTodo,
        setInputTodo,
        handleAddTodos,
        handleDeleteTodos,
        messageErr,
        editId,
        setEditTodo,
        editTodo,
        handleClickEdit,
        handleSaveEdit,
        isEditing,
        handleIsEdit,
        handleAddTasks,
        setInputTask,
        inputTask,
        showInput,
        setShowInput,
        handleIsShow
    };
}
