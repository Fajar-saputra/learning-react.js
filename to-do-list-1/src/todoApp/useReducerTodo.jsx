import { v4 } from "uuid";

export default function useReducerTodo(todos, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, { id: v4(), title: action.payload.titile, isDone: false, subtodo: [] }];

        case "DONE_TODO":
            return todos.map(todo => todo.id === action.payload.todoId? {...todo, isDone: !todo.isDone} : todo);

        case "UPDATE_TODO":
            return todos.map(todo => todo.id === action.payload.todoId? {...todo, title: action.payload.title} : todo);

        case "DELETE_TODO":
            return todos.filter(todo => todo.id !== action.payload.todoId);

        default:
            return todos;
    }
}
