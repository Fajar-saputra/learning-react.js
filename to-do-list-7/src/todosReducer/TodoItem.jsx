import { useContext, useState } from "react";
import { TodosContext } from "./TodoContext";

export default function TodoItem() {
    const { todos, dispatch } = useContext(TodosContext);
    // todo
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodo, setEditTodo] = useState("");

    // task
    const [task, setTask] = useState("");

    // style input
    const styleInput = {
        padding: ".5rem",
        width: "250px",
    };

    // func todo
    const handleClickEditTodo = (todoId, title) => {
        setEditTodo(title);
        setEditTodoId(todoId);
    };

    const handleSaveEditTodo = (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE_TODO",
            payload: { todoId: editTodoId, text: editTodo },
        });

        handleCancelEditTodo();
    };

    const handleCancelEditTodo = () => {
        setEditTodo("");
        setEditTodoId(null);
    };

    const handleDoneTodo = (todoId) => {
        dispatch({ type: "DONE_TODO", payload: { todoId } });
    };

    const handleDeleteTodo = (todoId) => {
        dispatch({ type: "DELETE_TODO", payload: { todoId } });
    };

    // func task
    const handleAddTask = (e, todoId) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TASK",
            payload: { todoId, title: task[todoId] },
        });

        setTask((prev) => ({ ...prev, [todoId]: "" }));
    };

    const handleDoneTask = (todoId, taskId) => {
        dispatch({
            type: "DONE_TASK",
            payload: { todoId, taskId },
        });
    };

    const handleDeleteTask = (todoId, taskId) => {
        dispatch({ type: "DELETE_TASK", payload: { todoId, taskId } });
    };

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.id === editTodoId ? (
                        <div>
                            <strong>Sedang di edit!!</strong>
                            <form onSubmit={handleSaveEditTodo}>
                                <input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                                <button type="submit">✔</button>
                                <button type="button" onClick={handleCancelEditTodo}>
                                    ✖
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            {todo.done ? <span style={{ color: "red" }}>{todo.title}</span> : <span>{todo.title}</span>}

                            <span>
                                <button type="button" onClick={() => handleDoneTodo(todo.id)}>
                                    ✔
                                </button>
                                <button type="button" onClick={() => handleClickEditTodo(todo.id, todo.title)}>
                                    ⚙
                                </button>
                                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                    🗑
                                </button>
                            </span>

                            <form onSubmit={(e) => handleAddTask(e, todo.id)} style={styleInput}>
                                <input type="text" value={task[todo.id] || ""} placeholder="New task..." onChange={(e) => setTask({ ...task, [todo.id]: e.target.value })} />
                                <button type="submit">✔</button>
                            </form>

                            <div>
                                <ul>
                                    {todo.tasks.map((task) => (
                                        <li key={task.id}>
                                            <div>
                                                {task.done ? <span style={{ color: "green" }}>{task.title}</span> : <span>{task.title}</span>}
                                                <span>
                                                    <button type="button" onClick={() => handleDoneTask(todo.id, task.id)}>
                                                        ✔
                                                    </button>
                                                    <button type="button" onClick={() => handleDeleteTask(todo.id, task.id)}>
                                                        🗑
                                                    </button>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
