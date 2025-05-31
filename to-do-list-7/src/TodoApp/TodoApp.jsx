import ListTodo from "./components/ListTodo";
import LogicTodo from "./hooks/LogicTodo";

export default function TodoApp() {
    const { todos } = LogicTodo();

    return (
        <>
            <ListTodo todos={todos} />
        </>
    )
}