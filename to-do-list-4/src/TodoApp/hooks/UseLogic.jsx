// hooks/useTodo.js
import { useState } from "react";

export function UseLogic() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Belajar React",
            subtasks: [
                { id: 101, text: "Pahami useState", done: false },
                { id: 102, text: "Pahami props", done: false }
            ]
        }
    ]);

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            subtasks: []
        };
        setTodos([...todos, newTodo]);
    };

    const toggleSubtask = (todoId, subtaskId) => {
        const updated = todos.map((todo) =>
            todo.id === todoId
                ? {
                      ...todo,
                      subtasks: todo.subtasks.map((sub) =>
                          sub.id === subtaskId ? { ...sub, done: !sub.done } : sub
                      )
                  }
                : todo
        );
        setTodos(updated);
    };

    return {
        todos,
        addTodo,
        toggleSubtask
    };
}
