import React, { useState } from "react";

export default function LogicTodo() {
    const [todos, setTodos] = useState([{ id: 1, title: "Belajar React Basic", subtask: [] }]);
    // add todo
    const [inputTodo, setInputTodo] = useState("");
    // edit todo
    const [editId, setEditId] = useState(null);

    const handleError = (inputTrimmed) => {
        // const inputTrimmed = input.trim();

        if (inputTrimmed === " ") {
            return "Input tidak boleh kosong";
        }

        if (inputTrimmed.length <= 4) {
            return "Minimal 5 karakter!";
        }

        const duplicated = todos.some(todo => todo.id === editId ? todo.title.toLowerCase() : inputTrimmed.toLowerCase());

        if (duplicated) {
            return "Input sudah ada!";
        }


        return null;
    };

    // add todo
    const handleAddTodos = (e) => {
        e.preventDefault();

        const trimmed = inputTodo.trim();

        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title: trimmed, subtask: [] }]);
        setInputTodo("");
    };

    // hapus todo
    const handleDeleteTodos = (id) => {
        setTodos(prevTodos => [
            ...prevTodos, prevTodos.filter(todo => 
                if (todo.id === id) {
                
                }
            )
        ])
    }

    return {
        todos,
        inputTodo,
        setInputTodo,
        handleAddTodos,
        handleError
    };
}
