import { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Belajar ReactJS", isCompleted: false },
        { id: 2, task: "Belajar python", isCompleted: true },
        { id: 3, task: "Belajar css", isCompleted: false },
        { id: 4, task: "Belajar AI", isCompleted: true },
    ]);

    const [inputTask, setInputTask] = useState("");

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
            const newTodo = {
                id: Date.now(),
                task: trimmed,
                isCompleted: false,
            };

            // setTodos((prevTodo) => prevTodo.map((todo) => [...todo, newTodo]));
            setTodos((prevTodo) => [...prevTodo, newTodo]);
        }

        setInputTask("");
    }

    return (
        <>
            <h3>INI TODO</h3>
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="Enter task..." value={inputTask} onChange={(e) => setInputTask(e.target.value)}/>
                <button>Add</button>
            </form>
            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>{ todo.id } {todo.task}</li>
                ))}
            </ol>
        </>
    );
}
