import { useState } from "react";

export function UseLogic() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Belajar React",
            subtasks: [
                { id: 101, text: "Pahami useState", done: false },
                { id: 102, text: "Pahami props", done: false },
            ],
        },
        {
            id: 2,
            title: "Belajar JS",
            subtasks: [
                { id: 101, text: "Pahami variable", done: false },
                { id: 102, text: "Pahami if, for, while", done: false },
            ],
        },
        {
            id: 3,
            title: "Belajar JAVA",
            subtasks: [
                { id: 101, text: "Pahami variable", done: false },
                { id: 102, text: "Pahami if, for, while", done: false },
                { id: 103, text: "Pahami oop", done: false },
            ],
        },
    ]);

    const [inputTodo, setInputTodo] = useState("");
    // State untuk mode editing todo
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTodoText, setEditingTodoText] = useState("");

    // subtasks
    // Menggunakan objek untuk mengelola input subtask per todoId
    const [subtaskInput, setSubtaskInput] = useState({});
    // State untuk mode editing subtask
    const [editingSubtaskId, setEditingSubtaskId] = useState(null);
    const [editingSubtaskText, setEditingSubtaskText] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (inputTodo.trim() === "") return;

        if (inputTodo.trim().length < 4) {
            alert("Minimal 4 karakter!");
            return;
        }

        const duplicated = todos.some((todo) => todo.title.toLowerCase() === inputTodo.trim().toLowerCase());

        if (duplicated) {
            alert("Todo sudah ada!");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: inputTodo.trim(),
            subtasks: [],
        };

        setTodos([...todos, newTodo]);
        setInputTodo("");
    };

    const handleAddSubtask = (todoId) => {
        const subtaskText = subtaskInput[todoId] || "";

        if (subtaskText.trim().length < 3) {
            alert("Subtask minimal 3 karakter!");
            return;
        }

        const newSubtask = {
            id: Date.now(),
            text: subtaskText.trim(),
            done: false,
        };

        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    subtasks: [...todo.subtasks, newSubtask],
                };
            }
            return todo;
        });

        setTodos(updatedTodos);
        setSubtaskInput({ ...subtaskInput, [todoId]: "" });
    };

    // --- FUNGSI BARU UNTUK HAPUS DAN EDIT ---

    // Fungsi untuk menghapus todo utama
    const handleDeleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    // Fungsi untuk menghapus subtask
    const handleDeleteSubtask = (todoId, subtaskId) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    subtasks: todo.subtasks.filter((subtask) => subtask.id !== subtaskId),
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    // Fungsi untuk memulai mode edit todo
    const handleEditTodo = (todoId, currentText) => {
        setEditingTodoId(todoId);
        setEditingTodoText(currentText);
    };

    // Fungsi untuk menyimpan hasil edit todo
    const handleSaveEditTodo = (todoId) => {
        if (editingTodoText.trim().length < 4) {
            alert("Todo minimal 4 karakter!");
            return;
        }

        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, title: editingTodoText.trim() };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditingTodoId(null); // Keluar dari mode edit
        setEditingTodoText(""); // Bersihkan state input edit
    };

    // Fungsi untuk membatalkan edit todo
    const handleCancelEditTodo = () => {
        setEditingTodoId(null);
        setEditingTodoText("");
    };

    // Fungsi untuk memulai mode edit subtask
    const handleEditSubtask = (subtaskId, currentText) => {
        setEditingSubtaskId(subtaskId);
        setEditingSubtaskText(currentText);
    };

    // Fungsi untuk menyimpan hasil edit subtask
    const handleSaveEditSubtask = (todoId, subtaskId) => {
        if (editingSubtaskText.trim().length < 3) {
            alert("Subtask minimal 3 karakter!");
            return;
        }

        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    subtasks: todo.subtasks.map((subtask) =>
                        subtask.id === subtaskId ? { ...subtask, text: editingSubtaskText.trim() } : subtask
                    ),
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditingSubtaskId(null); // Keluar dari mode edit
        setEditingSubtaskText(""); // Bersihkan state input edit
    };

    // Fungsi untuk membatalkan edit subtask
    const handleCancelEditSubtask = () => {
        setEditingSubtaskId(null);
        setEditingSubtaskText("");
    };

    return {
        todos,
        setTodos,
        inputTodo,
        setInputTodo,
        handleAddTodo,
        subtaskInput,
        setSubtaskInput,
        handleAddSubtask,
        // Fungsi baru
        handleDeleteTodo,
        handleDeleteSubtask,
        handleEditTodo,
        handleSaveEditTodo,
        handleCancelEditTodo,
        editingTodoId,
        editingTodoText,
        setEditingTodoText,
        handleEditSubtask,
        handleSaveEditSubtask,
        handleCancelEditSubtask,
        editingSubtaskId,
        editingSubtaskText,
        setEditingSubtaskText,
    };
}