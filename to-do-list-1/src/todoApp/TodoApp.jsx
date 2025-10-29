import { useReducer, useState } from "react";
import { v4 } from "uuid";
import todoReducer from "./hooks/useReducerTodo";
import useTodoActions from "./hooks/useTodoActions";
import FormTodo from "./components/FormTodo";
import TodoItem from "./components/TodoItem";
import "./styles/TodoApp.css";

export default function TodoApp() {
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

    const [todos, dispatch] = useReducer(todoReducer, []);
    const [inpTodo, setInpTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [inpSub, setInpSub] = useState({});

    // ✅ Ambil semua handler dari hook modular
    const { handleAddTodo, handleDeleteTodo, handleDoneTodo, handleEditTodo, handleUpdateTodo, handleAddSubtodo, handleDoneSubtodo, handleDeleteSubtodo } = useTodoActions(
        dispatch,
        inpTodo,
        setInpTodo,
        setEditId,
        setEditTitle,
        inpSub,
        setInpSub
    );

    return (
        <div>
            <h2>Belajar Context dengan useReducer</h2>
                <FormTodo handle={handleAddTodo} input={inpTodo} setInput={setInpTodo} />
            <div className="todo-container">

                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        editId={editId}
                        editTitle={editTitle}
                        setEditTitle={setEditTitle}
                        inpSub={inpSub}
                        setInpSub={setInpSub}
                        handleUpdateTodo={handleUpdateTodo}
                        handleDoneTodo={handleDoneTodo}
                        handleEditTodo={handleEditTodo}
                        handleDeleteTodo={handleDeleteTodo}
                        handleAddSubtodo={handleAddSubtodo}
                        handleDeleteSubtodo={handleDeleteSubtodo}
                        handleDoneSubtodo={handleDoneSubtodo}
                    />
                ))}
            </div>
        </div>
    );
}
