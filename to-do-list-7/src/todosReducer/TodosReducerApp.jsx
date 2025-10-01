import TodoProvider from "./TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodosReducerApp() {
    return (
        <TodoProvider >
            <TodoForm />
            <TodoItem />
        </TodoProvider>
    )
}