import { useEffect, useState } from "react";

export default function useTodoLogic() {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem("saveTodos");
        return stored ? JSON.parse(stored) : [];
    });
    const [input, setInput] = useState("");
    const [editID, setEditID] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        localStorage.setItem("saveTodos", JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        if (input.trim().length < 4) {
            alert("Karakter harus lebih dari 4!");
            return;
        }
        const duplicated = todos.some((item) => item.title.toLowerCase() === input.toLowerCase());
        if (duplicated) {
            alert("Todo sudah ada!");
            return;
        }
        const newTodo = { id: Date.now(), title: input.trim() };
        setTodos((prevTodo) => [...prevTodo, newTodo]);
        setInput("");
    };

    const handleHapus = (id) => {
        // const update = todos.filter((todo) => todo.id !== id);
        // setTodos(update);

        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
    };

    const handleEdit = () => {
        if (editText.trim().length < 4) {
            alert("Minimal 3 karakter!");
            return;
        }
        const updated = todos.map((todo) => (todo.id === editID ? { ...todo, title: editText.trim() } : todo));
        setTodos(updated);
        setEditID(null);
        setEditText("");
    };

    const handleStartEdit = (id, title) => {
        setEditID(id);
        setEditText(title);
    };

    return {
        todos,
        input,
        setInput,
        editID,
        editText,
        setEditText,
        handleAdd,
        handleHapus,
        handleEdit,
        handleStartEdit,
    };
}
