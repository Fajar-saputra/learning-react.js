import FormTask from "./FormTask";
import { useTodos } from "./UseTodos";
import { useState } from "react";

export default function TodosList() {
    const { todos, dispatch } = useTodos();

    // todo
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoText, setEditTodoText] = useState("");
    // subtodo
    const [subText, setSubtodo] = useState("");

    function handleDeleteTodo(todoId) {
        dispatch({
            type: "DELETE_TODO",
            payload: { todoId },
        });
    }

    function handleDoneTask(todoId, taskId) {
        dispatch({
            type: "DONE_TASK",
            payload: {
                todoId,
                taskId,
            },
        });
    }

    function handleDeleteTask(todoId, taskId) {
        dispatch({
            type: "DELETE_TASK",
            payload: {
                todoId,
                taskId,
            },
        });
    }

    function handleDoneSub(todoId, taskId) {
        dispatch({
            type: "SUB_DONE",
            todoId,
            taskId,
        });
    }

    function handleAddSubtodo(e, todoId) {
        e.preventDefault();
        dispatch({
            type: "ADD_TASK",
            payload: {
                subText: subText[todoId],
                todoId,
            },
        });

        setSubtodo({ ...subText, [todoId]: "" });
    }

    function handleEditTodo(todoId, todoTitle) {
        setEditTodoId(todoId);
        setEditTodoText(todoTitle);
    }

    function handleCancelTodo() {
        setEditTodoId(null);
        setEditTodoText("");
    }

    function handleUpateEditTodo() {
        dispatch({
            type: "UPDATE_TODO",
            payload: {
                todoId: editTodoId,
                todoUpdate: editTodoText,
            },
        });

        handleCancelTodo();
    }

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.id === editTodoId ? (
                            <>
                                <p>Sedang diedit!!</p>
                                <input type="text" value={editTodoText} onChange={(e) => setEditTodoText(e.target.value)} />
                                <button type="button" onClick={handleUpateEditTodo}>
                                    ✔
                                </button>
                                <button type="button" onClick={handleCancelTodo}>
                                    ✖
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{todo.title}</span>
                                <span>
                                    <button type="button" onClick={() => handleEditTodo(todo.id, todo.title)}>
                                        ⚙
                                    </button>
                                </span>
                                <span>
                                    <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                                        🗑
                                    </button>
                                </span>
                            </>
                        )}
                        <div>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="New subtodo..." value={subText[todo.id] || ""} onChange={(e) => setSubtodo({ ...subText, [todo.id]: e.target.value })} />
                                <button type="submit" onClick={(e) => handleAddSubtodo(e, todo.id)}>
                                    ✔
                                </button>
                            </form>
                            {/* <FormTask todoId={todo.id}/> */}
                        </div>
                        <div>
                            <ol style={{ marginLeft: "2rem" }}>
                                {todo.tasks.map((task) => (
                                    <li key={task.id}>
                                        <span>{task.done === true ? <span style={{ color: "red" }}>{task.task}</span> : <span>{task.task}</span>}</span>
                                        <span>
                                            <button type="button" onClick={() => handleDeleteTask(todo.id, task.id)}>
                                                🗑
                                            </button>
                                        </span>
                                        <span>
                                            <button type="button" onClick={() => handleDoneTask(todo.id, task.id)}>
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
