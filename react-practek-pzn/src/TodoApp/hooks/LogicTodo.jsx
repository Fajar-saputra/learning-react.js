import { useState } from "react";

export default function LogicTodo() {
    const [todos, setTodos] = useState([{ id: 1, title: "Belajar react dasar", subtasks: [] }]);
    const [inputTodo, setInputTodo] = useState("");
    const [editId, setEditId] = useState(0);
    const [editTodo, setEditTodo] = useState("");
    const [task, setTask] = useState("");
    const [editTask, setEditTask] = useState("");

    const handleError = (correntItem, messsageErr, isEdit = false, correntItemId = null) => {
        return null;
    };

    const handleAddTodo = (e) => {
        e.preventDefault();

        const trimmed = inputTodo.trim();

        if (trimmed === "") return;
        if (trimmed.length <= 4) {
            alert("Minimal 5 karakter");
            return;
        }

        const duplicated = todos.some((todo) => todo.title.toLowerCase() === trimmed.toLowerCase());
        if (duplicated) {
            alert("Todo sudah ada!!");
            return;
        }

        // const newTodo = {
        //     id: Date.now(), title: trimmed, subtasks: []
        // }
        // setTodos([...todos, newTodo]);

        setTodos((prevTodo) => [
            ...prevTodo,
            {
                id: Date.now(),
                title: trimmed,
                subtasks: [],
            },
        ]);

        setInputTodo("");
    };

    const handleStartEditTodo = (todo) => {
        setEditId(todo.id);
        setEditTodo(todo.title);
    };

    const handleSaveEditTodo = () => {
        setTodos((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === editId) {
                    return { ...todo, title: editTodo };
                }
                return todo;
            })
        );
    };

    return {
        todos,
        setTodos,
        editId,
        inputTodo,
        setInputTodo,
        handleAddTodo,
        handleError,
        handleStartEditTodo,
        handleSaveEditTodo,
    };
}
