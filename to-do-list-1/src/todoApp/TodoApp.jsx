import { useReducer, useState } from "react";
import { v4 } from "uuid";
import useReducerTodo from "./useReducerTodo";

const initialState = [
    {
        id: v4(),
        title: "Belajar React",
        isDone: false,
        subtodo: [
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
        ],
    },
    {
        id: v4(),
        title: "Belajar Vue",
        isDone: false,
        subtodo: [
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
        ],
    },
    {
        id: v4(),
        title: "Belajar Angular",
        isDone: false,
        subtodo: [
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
        ],
    },
    {
        id: v4(),
        title: "Belajar PHP",
        isDone: false,
        subtodo: [
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
            { id: v4(), title: "subtodo level 2", isDone: false },
        ],
    },
];

export default function TodoApp() {
    const [todos, dispatch] = useReducer(useReducerTodo, initialState);
    const [inpTodo, setInpTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    function handleAddTodo(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: {
                titile: inpTodo,
            },
        });

        setInpTodo("");
    }
    function handleDeleteTodo(todoId) {
        dispatch({
            type: "DELETE_TODO",
            payload: {
                todoId,
            },
        });
    }
    function handleDoneTodo(todoId) {
        dispatch({
            type: "DONE_TODO",
            payload: {
                todoId,
            },
        });
    }
    function handleEditTodo(todoId, todoTitle) {
        setEditId(todoId);
        setEditTitle(todoTitle);
    }
    function handleUpdateTodo(e) {
        e.preventDefault();
        dispatch({
            type: "DELETE_TODO",
            payload: {
                todoId: editId,
                title: editTitle,
            },
        });
    }

    return (
        <div>
            <h2>Belajar Context dengan apk Reducer</h2>
            <div>
                <form onSubmit={handleAddTodo}>
                    <input type="text" value={inpTodo} placeholder="New Todo..." onChange={(e) => setInpTodo(e.target.value)} />
                    <button type="submit">➕</button>
                </form>

                <div>
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            {todo.id === editId ? (
                                <div>
                                    <span>tes aja dulu</span>
                                    <form onSubmit={(e) => handleUpdateTodo(e)}>
                                        <input type="text" value={editTitle} onChange={(e) => setInpTodo(e.target.value)} />
                                        <button type="submit">✔</button>
                                    </form>
                                </div>
                            ) : (
                                <div>
                                    {todo.isDone ? <span style={{ color: "green" }}>{todo.title}</span> : <span>{todo.title}</span>}
                                    <button type="button" onClick={() => handleDoneTodo(todo.id)}>
                                        ✔
                                    </button>
                                    <button type="button" onClick={() => handleEditTodo(todo.id, todo.title)}>
                                        ⚙
                                    </button>
                                    <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                        🗑
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
