import "./App.css";
import TodoForm from "./TodoApp/components/TodoForm";
import TodoItem from "./TodoApp/components/TodoItem";
import TodoList from "./TodoApp/components/TodoList";
import { UseLogic } from "./TodoApp/hooks/UseLogic";

function App() {
    const { todos, handleAddTodo, handleAddSubtask, subtaskInput, setSubtaskInput, inputTodo, setInputTodo } = UseLogic();

    console.log(todos);
    return (
        <div>
            <h2>Todo dengan Subtask</h2>
            <TodoForm handleAddTodo={handleAddTodo} setInputTodo={setInputTodo} inputTodo={inputTodo} />
            <TodoItem todos={todos} handleAddSubtask={handleAddSubtask} setSubtaskInput={setSubtaskInput} subtaskInput={subtaskInput} />
   
        </div>
    );

    
}

export default App;
