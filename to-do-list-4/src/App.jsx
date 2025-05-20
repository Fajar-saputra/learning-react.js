import "./App.css";
import TodoForm from "./TodoApp/components/TodoForm";
import TodoList from "./TodoApp/components/TodoList";
import { UseLogic } from "./TodoApp/hooks/UseLogic";

function App() {
    const { todos, toggleSubtask, handleAddTodo } = UseLogic();

    return (
        <div>
            <h2>Todo dengan Subtask</h2>
            <TodoForm handleAddTodo={handleAddTodo}/>
            <TodoList todos={todos} toggleSubtask={toggleSubtask} />
        </div>
    );
}

export default App;
