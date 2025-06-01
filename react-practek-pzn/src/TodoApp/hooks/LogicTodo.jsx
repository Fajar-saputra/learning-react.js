import { useState } from "react";

export default function LogicTodo() {
    const [todos, setTodos] = useState([]);
    const [inputTodo, setInputTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    const [task, setTask] = useState("");
    const [editTask, setEditTask] = useState("");

    const handleError = (correntItem, messsageErr, isEdit = false, correntItemId = null) => {
        return null;
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
    }

    const handleStartEditTodo = (id, title) => {
        setEditId(id);
        setEditTodo(title)
    }

    const handleSaveEditTodo = () => {
        
    }

    return {
        todos,
        setTodos,
        editId,
        setInputTodo,
        handleAddTodo,
        handleError,
        handleStartEditTodo,
        handleSaveEditTodo,
    }
}
