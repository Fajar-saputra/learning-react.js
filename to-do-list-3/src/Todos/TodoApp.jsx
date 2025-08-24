import { useReducer, useState } from "react";
import { v4 } from "uuid";
import Form from "./Form";

const initialTodos = [
    {
        id: v4(),
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

function todoReducer(todos, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, { id: v4(), title: action.text, tasks: [] }];
        case "DELETE_TODO":
            return todos.filter((todo) => todo.id === action.id);
        case "ADD_SUBTODO":
            return todos.map((todo) => (todo.id === action.id ? { ...todo, tasks: [{ id: v4(), task: action.text, done: false }] } : todo));
        case "DELETE_SUBTODO":
            return;
        case "COMPLETE_SUBTODO":
            return;

        default:
            return todos;
    }
}

export default function TodoApp() {
    const [inputTodo, setInput] = useState("");
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    return (
        <div>
            <h1>DAFTAR TODO</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}
