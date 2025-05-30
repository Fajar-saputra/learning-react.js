import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UseTodosLogic() {
    const [todos, setTodos] = useState([{ id: 123, title: "Testing aja", subtasks: [{ id: 111, task: "abcde" }] }]);
    // input todo
    const [inputTodos, setInputTodos] = useState("");
    // edit todo
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    // handel error
    const [messageErr, setMessageErr] = useState("");
    // add subtasks
    const [tasks, setAddtasks] = useState("");

    // add todo
    const handleAddTodo = (e) => {
        e.preventDefault();

        const trimmedInput = inputTodos.trim();

        if (trimmedInput === "") {
            alert("Todo tidak boleh kosong!");
            return;
        }

        if (trimmedInput.length <= 4) {
            alert("Minimal 5 karakter!!");
            return;
        }

        const duplicated = todos.some((todo) => todo.title.toLowerCase() === trimmedInput.toLowerCase());

        if (duplicated) {
            alert("Todo sudah ada!!");
            return;
        }

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: uuidv4(),
                title: trimmedInput,
                subtasks: [],
            },
        ]);

        setInputTodos("");
    };

    const handleClickEdit = (id, title) => {
        setEditId(id);
        setEditTodo(title);
    };

    const handleSaveEdit = () => {
        const text = editTodo.trim();

        if (text.length <= 4) {
            setMessageErr("Minimal 5 karakter!");
            return;
        }

        const isDuplicateWithOtherItems = todos.some((todo) => todo.id !== editId && todo.title.toLowerCase() === text.toLowerCase());

        if (isDuplicateWithOtherItems) {
            setMessageErr("Judul ini sudah digunakan oleh todo lain!");
            return;
        }

        // const updatedTodos = todos.map((todo) => (todo.id === editId ? { ...todo, title: text } : todo));
        // setTodos(updatedTodos);

        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === editId) {
                    return { ...todo, title: text };
                }
                return todo;
            })
        );

        setEditId(null);
        setEditTodo("");
        setMessageErr("");
    };

    const handelAddSubtasks = (id) => {
        const newSubtaskText = tasks.trim();

        if (newSubtaskText.length <= 4) {
            setMessageErr("Minimal 5 karakter untuk subtask!");
            return;
        }
        if (newSubtaskText === "") {
            setMessageErr("Subtask tidak boleh kosong!");
            return;
        }
        const currentTodo = todos.find((todo) => todo.id === id);
        if (currentTodo && currentTodo.subtasks.some((sub) => sub.task.toLowerCase() === newSubtaskText.toLowerCase())) {
            setMessageErr("Subtask ini sudah ada!");
            return;
        }

        const newSubtask = { id: uuidv4(), task: newSubtaskText };

        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        subtasks: [...(todo.subtasks || []), newSubtask],
                    };
                }
                return todo;
            });
        });

        setAddtasks("");
        setMessageErr("");
    };

    return {
        todos,
        inputTodos,
        setInputTodos,
        handleAddTodo,
        editTodo,
        editId,
        setEditTodo,
        handleClickEdit,
        handleSaveEdit,
        messageErr,
        setMessageErr,
        handelAddSubtasks,
        tasks,
        setAddtasks,
    };
}
