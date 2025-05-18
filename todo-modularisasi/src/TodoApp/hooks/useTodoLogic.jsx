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

    // add todo
    const handleAdd = (e) => {
        e.preventDefault();

        if (input.trim() === "") return;
        if (input.trim().length < 4) {
            alert("Minimal 4 karakter")
            return;
        }

        const duplicated = todos.some(todo => todo.title.toLowerCase() === input.trim().toLowerCase())
        if (duplicated) {
            alert("Todo sudah ada!")
            return;
        }

        const newTodo = { id: Date.now(), title: input.trim() }
        
        setTodos([ ...todos, newTodo ]);
        setInput("");
    }

    // hapus todo
    const handleHapus = (id) => {
        const updated = todos.filter(todo => todo.id !== id)
        setTodos(updated)
    }

    // tangkat id dan text untuk di hapus
    const handleStartEdit = (todo) => {
        setEditID(todo.id);
        setEditText(todo.title)
    }

    // edit todo
    const handleEditSubmit = () => {

        if (editText.trim().length < 4) {
            alert("Minimal 4 karakter!!")
            return;
        }

        
         const updated = todos.map((todo) => todo.id === editID ? { ...todo, title: editText.trim() } : todo);

        setTodos(updated)
        setEditID(null)
        setEditText("")
    }

   return {
        todos,
        input,
        setInput,
        editID,
        editText,
        setEditText,
        setEditID,
        handleAdd,
        handleHapus,
        handleEditSubmit,
        handleStartEdit,
    };
}
