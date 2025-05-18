import { useOptimistic, useState } from "react";

export default function useTodoLogic() {
    const [todos, setTodos] = useState([
        { id: 128, title: "Bahasa Pemograman C++" },
        { id: 129, title: "Bahasa Pemograman PHP" },
        { id: 123, title: "Bahasa Pemograman Java" },
        { id: 130, title: "Bahasa Pemograman Kotlin" },
        { id: 127, title: "Bahasa Pemograman JavaScript" },
    ]);

    const [input, setInput] = useState("");
    const [editID, setEditID] = useState(null);
    const [editTodo, setEditTodo] = useState("");

    // add todo
    const handleAddTodo = (e) => {
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
        setTodos([...todos, newTodo]);
        setInput("");
    };

    // hapus todo
    const handleHapusTodo = (id) => {
        const updated = todos.filter((todo) => todo.id !== id);
        setTodos(updated);
    };

    // tangkap
    const handleTangkapEdit = (id, title) => {
        setEditID(id);
        setEditTodo(title);
        console.log(id);
        console.log(title);
    };

    // edit todo
    const handleEditTodo = () => {
        if (editTodo.trim().length < 4) {
            alert("Minimal 4 karakter!");
            return;
        }

        const updated = todos.map((todo) => (todo.id === editID ? { ...todo, title: editTodo.trim() } : todo));

        setTodos(updated);
        setEditID(null);
        setEditTodo("");
        console.log("berjalan : ", todos);
    };

    return {
        todos,
        input,
        setInput,
        editID,
        editTodo,
        setEditTodo,
        handleAddTodo,
        handleHapusTodo,
        handleEditTodo,
        handleTangkapEdit,
    };
}
