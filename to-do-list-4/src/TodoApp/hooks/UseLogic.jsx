import { useState } from "react";

export function UseLogic() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Belajar React",
            subtasks: [
                { id: 101, text: "Pahami useState", done: false },
                { id: 102, text: "Pahami props", done: false },
            ],
        },
        {
            id: 2,
            title: "Belajar JS",
            subtasks: [
                { id: 101, text: "Pahami variable", done: false },
                { id: 102, text: "Pahami if, for, while", done: false },
            ],
        },
        {
            id: 3,
            title: "Belajar JAVA",
            subtasks: [
                { id: 101, text: "Pahami variable", done: false },
                { id: 102, text: "Pahami if, for, while", done: false },
                { id: 103, text: "Pahami oop", done: false },
            ],
        },
    ]);

    const [inputTodo, setInputTodo] = useState("");

    // subtasks
    const [subtaskInput, setSubtaskInput] = useState("");
    const [subTaskID, setSubTaskID] = useState(null);

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (inputTodo.trim() === "") return;

        if (inputTodo.trim().length < 4) {
            alert("Minimal 5 karakter!");
            return;
        }

        const duplicated = todos.some((todo) => todo.title === inputTodo.trim());

        if (duplicated) {
            alert("Todo sudah ada!");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: inputTodo.trim(),
            subtasks: [],
        };

        setTodos([...todos, newTodo]);
        setInputTodo("");
    };

    const handleAddSubtask = (todoId) => {
        if (subtaskText.trim().length < 3) {
            alert("Subtask minimal 3 karakter!");
            return;
        }

        const newSubtask = {
            id: Date.now(),
            text: subtaskText.trim(),
            done: false,
        };

        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    subtasks: [...todo.subtasks, newSubtask],
                };
            }
            return todo;
        });

        setTodos(updatedTodos);
        setSubtaskInput({ ...subtaskInput, [todoId]: "" });
    };

    return {
        todos,
        setTodos,
        inputTodo,
        setInputTodo,
        handleAddTodo,
        subTaskID,
        setSubTaskID,
        subtaskInput,
        setSubtaskInput,
        handleAddSubtask
    };
}
