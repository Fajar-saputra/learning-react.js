import React, { useState } from "react";

export default function LogicTasks() {
    // add subtasks
    const [inputTasks, setInputTasks] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [errTask, setErrTask] = useState("");

    // error input
    const handleErrorTaks = (input) => {
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

    // add task
    const handleAddTasks = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...prevTodos,
                        subtask: [...task, { id: Date.now(), task: inputTasks }],
                    };
                }
                return todo;
            })
        );
    };

    const handleIsShow = () => {
        setShowInput(!false);
    };

    return {
        handleAddTasks,
        setInputTasks,
        inputTasks,
        showInput,
        setShowInput,
        handleIsShow,
        handleErrorTaks,
    };
}
