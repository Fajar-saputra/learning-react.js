import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function LogicTodo() {
    // daftar todo
    const [todos, setTodos] = useState([
        {
            id: uuidv4,
            title: "Testing again",
            subtasks: [],
        },
        {
            id: uuidv4,
            title: "Testing lagi",
            subtasks: [],
        },
    ]);

    // input todo
    const [inputTodo, setInputTodo] = useState("");
    // edit Todo
    const [editIdTodo, setEditIdTodo] = useState(null);
    const [editTodo, setEditTodo] = useState("");

    // handle add todo
    const handleAddTodo = (e) => {
        e.preventDefault();

        const trimmed = inputTodo.trim();

        if (trimmed === "") {
            alert("Karakter tidak boleh kosong");
            return;
        }

        if (trimmed.length <= 5) {
            alert("Minimal 5 karakter!!");
            return;
        }

        const duplicated = todos.some((todo) => todo.id === editIdTodo);
        if (duplicated) {
            alert("Todo sudah ada!!");
            return;
        }

        // const newTodo = {
        //     id: uuidv4(),
        //     title: trimmed,
        //     subtasks: [],
        // };

        // setTodos([...todos, newTodo]);

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: Date.now(),
                title: trimmedInput,
                subtasks: [],
            },
        ]);
        setInputTodo("");
    };

    return {
        todos,
        setTodos,
        setInputTodo,
    };
}
