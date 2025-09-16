import { useState } from "react";
import { useTodos } from "./UseTodos";

export default function FormTask({todoId}) {
    const { dispatch } = useTodos();
    const [task, setTask] = useState("");

    function handleAddTask(e, todoId) {
        e.preventDefault();
        dispatch({
            type: "ADD_TASK",
            payload: {
                todoId,
                subText: task,
            },
        });

        setTask("");
    }

    return (
        <>

            <form onSubmit={(e) => handleAddTask(e, todoId)}>
                <input type="text" placeholder="New task..." value={task[todoId] || ""} onChange={(e) => setTask({ ...task, [todoId]: e.target.value })} />
                <button type="submit">
                    +
                </button>
            </form>
        </>
    );
}
