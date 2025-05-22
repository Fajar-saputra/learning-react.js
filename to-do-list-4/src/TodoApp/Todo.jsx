import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { UseLogic } from "./hooks/UseLogic";

export default function Todo() {
    const { todos, inputTodo, setInputTodo, handleAddTodo, handleAddSubtask, subtaskInput, setSubtaskInput } = UseLogic();

    return (
        <div>
            <h1>Testing Todo</h1>
            <TodoForm inputTodo={inputTodo} setInputTodo={setInputTodo} handleAddTodo={handleAddTodo} />

            <TodoItem todos={todos} handleAddSubtask={handleAddSubtask} subtaskInput={subtaskInput} setSubtaskInput={setSubtaskInput} />
        </div>
    );
}
