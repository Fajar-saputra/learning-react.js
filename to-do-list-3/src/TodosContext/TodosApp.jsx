import { TodosProvider } from "./UseTodos";
import FormTodo from "./FormTodo";
import TodosList from "./TodosList";

export default function TodosApp() {
    return (
        <TodosProvider>
            <h2>Todo Context dan Reducer</h2>
            <FormTodo />
            <TodosList />
        </TodosProvider>
    );
}
