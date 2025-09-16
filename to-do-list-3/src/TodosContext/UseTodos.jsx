import { act, createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";

const TodosContext = createContext(null);

export const useTodos = () => {
    return useContext(TodosContext);
};

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

const TodoReducer = (todos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, { id: v4(), done: false, title: action.payload.text, tasks: [] }];

        case "DELETE_TODO":
            return todos.filter((todo) => todo.id !== action.payload.todoId);

        case "UPDATE_TODO":
            return todos.map((todo) =>
                todo.id === action.todoId
                    ? {
                          ...todo,
                          title: action.todoUpdate,
                      }
                    : todo
            );

        case "ADD_TASK":
            return todos.map((todo) =>
                todo.id === action.payload.todoId
                    ? {
                          ...todo,
                          tasks: [...todo.tasks, { id: v4(), task: action.payload.subText, done: false }],
                      }
                    : todo
            );

        case "DELETE_TASK":
            return todos.map((todo) =>
                todo.id === action.payload.todoId
                    ? {
                          ...todo,
                          tasks: todo.tasks.filter((task) => task.id !== action.payload.taskId),
                      }
                    : todo
            );

        case "DONE_TASK":
            return todos.map((todo) =>
                todo.id === action.payload.todoId
                    ? {
                          ...todo,
                          tasks: todo.tasks.map((task) => (task.id === action.payload.taskId ? { ...task, done: !task.done } : task)),
                      }
                    : todo
            );

        case "UPDATE_TODO":
            return todos.map((todo) =>
                todo.id === action.payload.todoId
                    ? {
                          ...todo,
                          title: action.payload.updateTodo,
                      }
                    : todo
            );

        default:
            return todos;
    }
};

export const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(TodoReducer, initialTodos);

    return <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>;
};
