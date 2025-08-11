import { useState } from "react";
import { v4 } from "uuid";

export default function LogicTodo() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Belajar React Intermedian", done: false },
        { id: 2, text: "Belajar React Intermedian", done: false },
        { id: 3, text: "Belajar React Intermedian", done: false },
        { id: 4, text: "Belajar React Intermedian", done: false },
        { id: 5, text: "Belajar React Intermedian", done: false },
    ]);

    const [inputTodo, setInputTodo] = useState("");

    function handleAddTodo(e) {
        e.preventDefault();

        const id = v4();

        const newTodo = {
            id: id,
            text: inputTodo.trim(),
            done: false,
        };

        setTodos((prevTodo) => [...prevTodo, newTodo]);
        setInputTodo("");
    }

    return {
        todos,
        setTodos,
        setInputTodo,
        inputTodo,
        handleAddTodo,
    };
}
