import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodosList";
import UseTodosLogic from "./hooks/useTodosLogic";

export default function Todo() {
    const { todos, setInputTodos, inputTodos, handleAddTodos } = UseTodosLogic();
    return (
        <>
            <TodoForm setInputTodos={setInputTodos} inputTodos={inputTodos} handleAddTodos={handleAddTodos}/>
            <TodoItem todos={todos}/>
        </>
    );
}
