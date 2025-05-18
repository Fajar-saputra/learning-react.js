import "./App.css";
import TodoForm from "./TodoApp/components/TodoForm";
import TodoItem from "./TodoApp/components/TodoItem";
import useTodoLogic from "./TodoApp/hooks/useTodoLogic";

function App() {
    const { todos, input, setInput, editID, editTodo, setEditTodo, handleAddTodo, handleHapusTodo, handleEditTodo, handleTangkapEdit } = useTodoLogic();

    return (
        <>
            <TodoForm input={input} setInput={setInput} handleAddTodo={handleAddTodo} />
            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            editID={editID}
                            editTodo={editTodo}
                            handleTangkapEdit={handleTangkapEdit}
                            handleEditTodo={handleEditTodo}
                            handleHapusTodo={handleHapusTodo}
                            setEditTodo={setEditTodo}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default App;
