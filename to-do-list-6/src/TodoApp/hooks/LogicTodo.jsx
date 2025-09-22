import React, { useEffect, useState } from "react";

export default function LogicTodo() {
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         title: "Belajar React Basic",
    //         subtask: [
    //             { id: 101, task: "Belajar java" },
    //             { id: 102, task: "Belajar js" },
    //             { id: 103, task: "Belajar php" },
    //             { id: 104, task: "Belajar c#" },
    //         ],
    //     },
    // ]);

    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });

    // State untuk todo utama (add/edit/delete)
    const [inputTodo, setInputTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    const [todoErr, setTodoErr] = useState(""); 

    // useEffect(() => {
    //     const stored = localStorage.getItem("todos");
    //     if (stored) {
    //         setTodos(JSON.parse(stored));
    //     }
    // }, []);

    useEffect(() => {
        console.log("berhasil diambil");
        
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleErrorTodo = (input) => {
        if (input.trim() === "") {
            return "Input tidak boleh kosong";
        }
        if (input.length < 5) {
            return "Minimal 5 karakter!";
        }
        // Cek duplikasi untuk todo utama
        const duplicated = todos.some((todo) => todo.id !== editId && todo.title.toLowerCase() === input.toLowerCase());
        if (duplicated) {
            return "Input sudah ada!";
        }
        return null;
    };

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

    const handleDeleteTodos = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleClickEdit = (id, title) => {
        setEditId(id);
        setEditTodo(title);
        setTodoErr("");
    };

    const handleSaveEdit = () => {
        const trimmed = editTodo.trim();
        const messError = handleErrorTodo(trimmed);
        if (messError) {
            setTodoErr(messError);
            return;
        }
        setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === editId ? { ...todo, title: trimmed } : todo)));
        setEditId(null);
        setEditTodo("");
        setTodoErr(null);
    };

    // Logic untuk subtasks akan dipindahkan ke komponen TodoItem
    // Tetapi fungsi untuk update 'todos' perlu diteruskan dari sini

    const addSubtask = (todoId, subtaskText) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    const newSubtask = { id: Date.now(), task: subtaskText };
                    return {
                        ...todo,
                        subtask: [...todo.subtask, newSubtask],
                    };
                }
                return todo;
            })
        );
    };

    const deleteSubtask = (todoId, subtaskId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        subtask: todo.subtask.filter((sub) => sub.id !== subtaskId),
                    };
                }
                return todo;
            })
        );
    };

    const editSubtask = (todoId, subtaskId, newSubtaskText) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        subtask: todo.subtask.map((sub) => (sub.id === subtaskId ? { ...sub, task: newSubtaskText } : sub)),
                    };
                }
                return todo;
            })
        );
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
        // Fungsi untuk subtasks akan diteruskan sebagai props ke TodoItem
        addSubtask,
        deleteSubtask,
        editSubtask,
    };
}
