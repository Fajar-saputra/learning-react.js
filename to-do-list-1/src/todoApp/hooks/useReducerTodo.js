import { v4 } from "uuid";

export default function useReducerTodo(todos, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, { id: v4(), title: action.payload.title, isDone: false, subtodo: [] }];

        case "DONE_TODO":
            return todos.map((todo) => (todo.id === action.payload.todoId ? { ...todo, isDone: !todo.isDone } : todo));

        case "UPDATE_TODO":
            return todos.map((todo) => (todo.id === action.payload.todoId ? { ...todo, title: action.payload.title } : todo));

        case "DELETE_TODO":
            return todos.filter((todo) => todo.id !== action.payload.todoId);

        case "ADD_SUBTODO":
            return todos.map((todo) => (todo.id === action.payload.todoId ? { ...todo, subtodo: [...todo.subtodo, { id: v4(), title: action.payload.subTitle, isDone: false }] } : todo));

        case "DONE_SUBTODO":
            return todos.map((todo) =>
                todo.id === action.payload.todoId ? { ...todo, subtodo: todo.subtodo.map((sub) => (sub.id === action.payload.subId ? { ...sub, isDone: !sub.isDone } : sub)) } : todo
            );

        case "DELETE_SUBTODO":
            return todos.map((todo) => (todo.id === action.payload.todoId ? { ...todo, subtodo: todo.subtodo.filter((sub) => sub.id !== action.payload.subId) } : todo));

        default:
            return todos;
    }
}
