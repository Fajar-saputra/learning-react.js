import { act, createContext, useReducer } from "react";
import { v4 } from "uuid";

// reducer
export function TodosReducer(todos, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, { id: v4(), title: action.payload.title,done: false, tasks: [] }];
        
        case "DELETE_TODO":
            return todos.filter(todo => todo.id !== action.payload.todoId);
        
        case "DONE_TODO":
            return todos.map(todo => todo.id === action.payload.todoId ? { ...todo, done: !todo.done } : todo);
        
        case "UPDATE_TODO":
            return todos.map(todo => todo.id === action.payload.todoId? {...todo, title: action.payload.text}: todo)

            default:
                todos;
    }
}

// initial todos
const initialTodos = [
    { id: v4(), title: "Belajar React", done: false ,tasks: [] },
    { id: v4(), title: "Belajar React", done: false ,tasks: [] },
    { id: v4(), title: "Belajar React", done: false ,tasks: [] },
    { id: v4(), title: "Belajar React", done: false ,tasks: [] }
];

// create context
export const TodosContext = createContext(null);

// provider
export default function TodosProvider({ children }) {
    const  [todos, dispatch]  = useReducer(TodosReducer, initialTodos);

    return <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>;
}
