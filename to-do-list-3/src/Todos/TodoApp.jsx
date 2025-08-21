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
            return [
                ...todos,
                {
                    id: v4(),
                    title: action.text,
                    tasks: [],
                },
            ];
        case "ADD_SUBTODO":
            return todos.map((todo) =>
                todo.id === action.id
                    ? {
                          ...todo,
                          tasks: [
                              ...todo.tasks,
                              {
                                  id: v4(),
                                  task: action.text,
                                  done: false,
                              },
                          ],
                      }
                    : todo
            );
        case "UPDATE_TODO":
            return todos.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
        case "UPDATE_SUBTODO":
            return todos.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
        case "DELETE_TODO":
            return todos.filter((todo) => todo.id !== action.id);
        case "TOGGLE_DONE":
            return todos.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
        default:
            return todos;
    }
}

export default function TodoApp() {
    // todo
    const [inputTodo, setInputTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    // subtodo
    const [inputSubtodo, setInputSubtodo] = useState("");

    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    function handleAddTodo(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            text: inputTodo,
        });
        setInputTodo("");
    }
    function handleUpdateTodo(e) {
        e.preventDefault();
        dispatch({ type: "UPDATE_TODO", id: editId, text: editText });
        setEditId(null);
        setEditText("");
    }
    function handleDeleteTodo(id) {
        dispatch({
            type: "DELETE_TODO",
            id,
        });
    }

    function handleIsDone(id) {
        dispatch({
            type: "TOGGLE_DONE",
            id,
        });
    }

    function handleStartUpdateTodo(id, text) {
        setEditId(id);
        setEditText(text);
    }

    function handleCancelEdit() {
        setEditId(null);
        setEditText("");
    }

    // handle subtodo

    const handleAddSubTodo = (todoId) => {
        if (!inputSubtodo[todoId]?.trim()) return;
        dispatch({
            type: "ADD_SUBTODO",
            id: todoId,
            text: inputSubtodo[todoId],
        });
        setInputSubtodo({ ...inputSubtodo, [todoId]: "" });
    };

    return (
        <div>
            <h2>Testing Todo</h2>
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder="Enter Todo..." value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
                <button type="submit">➕</button>
            </form>
            <div>
                <ol className="container-todo">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <div className="todo-wrap">
                                <div className="todo-head">
                                    <h3>{todo.title}</h3>

                                    <div className="button-head">
                                        <button type="button" onClick={() => handleStartUpdateTodo(todo.id, todo.text)}>
                                            ⚙
                                        </button>
                                        <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                            🗑
                                        </button>
                                    </div>
                                </div>

                                <div className="todo-body">
                                    <form onSubmit={(e) => e.target.value}>
                                        <input
                                            type="text"
                                            placeholder="Enter Subtodo..."
                                            value={inputSubtodo[todo.id] || ""}
                                            onChange={(e) => setInputSubtodo({ ...inputSubtodo, [todo.id]: e.target.value })}
                                        />
                                        <button type="button" onClick={() => handleAddSubTodo(todo.id)}>➕</button>
                                    </form>
                                    <ul>
                                        {todo.tasks.map((task) => (
                                            <li key={task.id}>{task.task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
