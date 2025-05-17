import { useState } from "react";

export default function useTodoLogic() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Belajar React" },
        { id: 2, title: "Ngoding modular JS" },
        { id: 3, title: "Refactor lokalStorage" },
    ]);

    const [input, setInput] = useState("");
    const [editID, setEditID] = useState(null);
    const [editText, setEditText] = useState("");

    const handleAdd = () => {
        e.preventDefault();

        if (input.trim() === "") return;
        if (input.trim().length < 4) {
            alert("Minimal 4 karakter")
            return;
        }

        const duplicated = todos.some(todo => todo.title === input.trim())
        if (duplicated) {
            alert("Todo sudah ada!")
            return;
        }

        const newTodo = { id: Date.now(), title: input.trim() }
        
        setTodos({ ...todos, newTodo });
        setInput("");
    }

   return {
        todos,
        input,
        setInput,
        editID,
        editText,
        setEditText,
        handleAdd,
        // handleHapus,
        // handleEdit,
        // handleStartEdit,
    };
}
