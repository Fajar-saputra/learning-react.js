import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import useTodoLogic from "./hooks/useTodoLogic";

export default function Todo() {
    const {
        todos,
        input,
        setInput,
        editID,
        editText,
        setEditText,
        setEditID,
        handleAdd,
        handleHapus,
        handleStartEdit,
        handleEditSubmit,
    } = useTodoLogic();

    return (
        <>
            <h1>LIST TODO</h1>
            <TodoForm handleAdd={handleAdd} input={input} setInput={setInput} />
            <ul>

                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            editID={editID}
                            editText={editText}
                            setEditID = {setEditID}
                            setEditText={setEditText}
                            handleHapus={() => handleHapus(todo.id)}
                            handleEditSubmit={handleEditSubmit}
                            handleStartEdit={handleStartEdit}
                        />
                    )
                    
                })}

            </ul>
        </>
    );
}
