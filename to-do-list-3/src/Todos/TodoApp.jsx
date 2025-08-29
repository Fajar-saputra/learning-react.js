import { useReducer, useState } from "react";
import { v4 } from "uuid";
import Form from "./Form";

const initialTodos = [
    {
        id: v4(),
        done: false,
        title: "Hari Rabu",
        tasks: [
            { id: v4(), task: "Belajar react dasar", done: false },
            { id: v4(), task: "Belajar python dasar", done: false },
            { id: v4(), task: "Belajar vueJS dasar", done: false },
            { id: v4(), task: "Belajar public speaking", done: false },
            { id: v4(), task: "Membaca buku", done: false },
        ],
    },
    {
        id: v4(),
        done: false,
        title: "Hari Selasa",
        tasks: [
            { id: v4(), task: "Belajar react dasar", done: false },
            { id: v4(), task: "Belajar python dasar", done: false },
            { id: v4(), task: "Belajar vueJS dasar", done: false },
            { id: v4(), task: "Belajar public speaking", done: false },
            { id: v4(), task: "Membaca buku", done: false },
        ],
    },
];

const todoReducer = (todos, action) => {
    switch (action.type) {
        case "ADD":
            return [...todos, { id: v4(), done: false, title: action.text, tasks: [] }];
        case "DELETE":
            return todos.filter((todo) => todo.id !== action.id);
        case "DONE":
            return todos.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
        case "SUB_DELETE":
            return todos.map((todo) =>
                todo.id === action.todoId
                    ? {
                          ...todo,
                          tasks: todo.tasks.filter((task) => task.id !== action.taskId),
                      }
                    : todo
            );
        case "SUB_DONE":
            return todos.map((todo) =>
                todo.id === action.todoId
                    ? {
                          ...todo,
                          tasks: todo.tasks.map((task) => (task.id === action.taskId ? { ...task, done: !task.done } : task)),
                      }
                    : todo
            );
        default:
            return todos;
    }
};

export default function TodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [todoText, setTodoText] = useState("");

    function handleAddTodo(e) {
        e.preventDefault();
        dispatch({
            type: "ADD",
            text: todoText,
        });

        setTodoText("");
    }

    function handleDeleteTodo(id) {
        dispatch({
            type: "DELETE",
            id,
        });
    }

    function handleDoneTodo(id) {
        dispatch({
            type: "DONE",
            id,
        });
    }

    function handleDeleteSub(todoId, taskId) {
        dispatch({
            type: "SUB_DELETE",
            todoId,
            taskId,
        });
    }

    function handleDoneSub(todoId, taskId) {
        dispatch({
            type: "SUB_DONE",
            todoId,
            taskId,
        });
    }
    return (
        <div>
            <form action="" onSubmit={handleAddTodo}>
                <input type="text" placeholder="new todo..." value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            <span>{todo.done === true ? <span style={{ color: "green", fontWeight: "bold" }}>{todo.title}</span> : <span> {todo.title}</span>}</span>
                            <span>
                                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                    🗑
                                </button>
                            </span>
                            <span>
                                <button type="button" onClick={() => handleDoneTodo(todo.id)}>
                                    ✔
                                </button>
                            </span>
                        </div>
                        <div>
                            <ol style={{ marginLeft: "2rem" }}>
                                {todo.tasks.map((task) => (
                                    <li key={task.id}>
                                        <span>{task.done === true ? <span style={{ color: "green", fontWeight: "bold" }}>{task.task}</span> : <span> {task.task}</span>}</span>
                                        <span>
                                            <button type="button" onClick={() => handleDeleteSub(todo.id, task.id)}>
                                                🗑
                                            </button>
                                        </span>
                                        <span>
                                            <button type="button" onClick={() => handleDoneSub(todo.id, task.id)}>
                                                ✔
                                            </button>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
