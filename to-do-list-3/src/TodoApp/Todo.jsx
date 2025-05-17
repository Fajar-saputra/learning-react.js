import useTodoLogic from "./hooks/useTodoLogic";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function Todo() {
    const {
        todos,
        input,
        setInput,
        editID,
        editText,
        setEditText,
        handleAdd,
        handleHapus,
        handleEdit,
        handleStartEdit,
    } = useTodoLogic();

    return (
        <div>
            <h2>List</h2>
            <TodoForm input={input} setInput={setInput} handleAdd={handleAdd} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        editID={editID}
                        editText={editText}
                        setEditText={setEditText}
                        handleStartEdit={handleStartEdit}
                        handleEdit={handleEdit}
                        handleHapus={handleHapus}
                    />
                ))}
            </ul>
        </div>
    );
}
