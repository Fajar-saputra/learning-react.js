import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Belajar ReactJS", isCompleted: false },
        { id: 2, task: "Belajar python", isCompleted: true },
        { id: 3, task: "Belajar css", isCompleted: false },
        { id: 4, task: "Belajar AI", isCompleted: true },
    ]);

    const [inputTask, setInputTask] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    function handleAddTask(e) {
        e.preventDefault();

        const trimmed = inputTask.trim();

        const duplicated = todos.some((todo) => trimmed.toLowerCase() === todo.task.toLowerCase());

        if (trimmed == "") {
            return alert("Karakter tidak boleh kosong!");
        } else if (trimmed.length < 5) {
            return alert("Karakter harus lebih dari 5");
        } else if (duplicated) {
            return alert("Task sudah ada!");
        } else {
            const id = uuidv4();

            const newTodo = {
                id: id,
                task: trimmed,
                isCompleted: false,
            };

            setTodos((prevTodo) => [...prevTodo, newTodo]);
        }

        setInputTask("");
    }

    function toggleComplete(id) {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
    }

    function handleEditTodo() {}

    function handleDelete(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    return (
        <>
            <h3>INI TODO</h3>
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="Enter task..." value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
                <button>Add</button>
            </form>
            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={() => toggleComplete(todo.id)}>
                            {todo.isCompleted ? "✅" : "⬜️"} {todo.task}{" "}
                        </span>{" "}
                        <span className="edit-btn" onClick={() => handleEditTodo(todo.id)}>⚙ </span>
                        <span onClick={() => handleDelete(todo.id)} className="delete-btn">
                            🗑
                        </span>
                    </li>
                ))}
            </ol>
        </>
    );
}
