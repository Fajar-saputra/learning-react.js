import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import LogicTodo from "./hooks/LogicTodo";

export default function Todo() {
    const { todos, inputTodo, setInputTodo, handleAddTodos, handleError } = LogicTodo();
    return (
        <div>
            <h1>Testing hello word</h1>
            <FormTodo inputTodo={inputTodo} setInputTodo={setInputTodo} handleAddTodos={handleAddTodos}/>
            <ListTodo todos={todos} />
        </div>
    );
}
