import { useState } from "react";

export default function UseLogic() {
    const [todos, setTodos] = useState([
        { id: 123, title: "Belajar React" },
        { id: 124, title: "Belajar Java" },
        { id: 127, title: "Belajar C#" },
        { id: 128, title: "Belajar Unity" },
    ]);

    const [input, setInput] = useState("");
    const [editID, setEditID] = useState(null);
    const [editTodo, setEditTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (input.trim() === "") return;

        if (input.trim().length < 4) {
            alert("Minimal 4 karakter!");
            return;
        }

        const duplicated = todos.some((todo) => todo.title === input.trim());

        if (duplicated) {
            alert("Todo sudah ada!");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: input.trim(),
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };

    const handleHapusTodo = (id) => {
        const updated = todos.filter((todo) => todo.id !== id);
        setTodos(updated);
    };

    const handleStartEdit = (todo) => {
        setEditID(todo.id);
        setEditTodo(todo.title);
        console.log("id : ", todo.id);
        console.log("title : ", todo.title);
    };

    const handleEditTodo = () => {
        if (editTodo.trim().length < 4) {
            alert("Minimal 4 karakter!");
            return;
        }

        const updated = todos.map((todo) => (todo.id === editID ? { ...todo, title: editTodo.trim() } : todo));

        setTodos(updated);
        setEditID(null);
        setEditTodo("");
    };

    return {
        todos,
        input,
        setInput,
        handleAddTodo,
        handleHapusTodo,
        handleEditTodo,
        handleStartEdit,
        editID,
        setEditTodo,
        editTodo,
    };
}
