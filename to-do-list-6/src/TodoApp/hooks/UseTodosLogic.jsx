import { useState } from "react";

export default function UseTodosLogic() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Belajar React (Minggu 1)",
            subtasks: [
                { id: 101, text: "Mengenal JSX" },
                { id: 102, text: "Memahami Props" },
            ],
        },
        {
            id: 2,
            title: "Buat To-Do List",
            subtasks: [
                { id: 201, text: "Tambahkan Fitur Hapus" },
                { id: 202, text: "Implementasi Subtask" },
            ],
        },
        { id: 3, title: "Persiapan Minggu 2", subtasks: [] },
    ]);

    const [inputTodos, setInputTodos] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTodos, setEditTodos] = useState("");

    const handleAddTodos = (e) => {
        e.preventDefault();

        if (inputTodos.trim() === "") return;

        if (inputTodos.trim().length <= 5) {
            alert("Minimal 5 karakter!!");
            return;
        }

        const duplicated = todos.some((todo) => todo.title.toLowerCase() === inputTodos.trim().toLowerCase());

        if (duplicated) {
            alert("Todo sudah ada!!");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: inputTodos.trim(),
            subtasks: [],
        };

        setTodos([...todos, newTodo]);
        setInputTodos("");
    };

    const handleStartEdit = (id, title) => {
        setEditId(id);
        setEditTodos(title);
    };

    const handleFinalEdit = () => {
        if (inputTodos.trim() === "") return;

        if (inputTodos.trim().length <= 5) {
            alert("Minimal 5 karakter!!");
            return;
        }

        const updated = todos.map(todo => todo.id === editId ? { ...todo, title: editTodos } : todo);
        
        setTodos([...todos, updated]);
        setEditId(null);
        setEditTodos("");
    };

    return {
        todos,
        setTodos,
        inputTodos,
        setInputTodos,
        handleAddTodos,
        editId,
        setEditId,
        editTodos,
        setEditTodos,
        handleStartEdit,
        handleFinalEdit
    };
}
