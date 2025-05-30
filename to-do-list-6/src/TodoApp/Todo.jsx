import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodosList";
import UseTodosLogic from "./hooks/useTodosLogic";

export default function Todo() {
    const {
        todos,
        handleAddTodo,
        setInputTodos,
        inputTodos,
        handleSaveEdit,
        handleClickEdit,
        editId,
        editTodo,
        messageErr,
        setEditTodo,
        handelAddSubtasks,
        tasks,
        setAddtasks
    } = UseTodosLogic();

    return (
        
        <>
            <TodoForm handleAddTodo={handleAddTodo} setInputTodos={setInputTodos} InputTodos={inputTodos} />
            <TodoList
                todos={todos}
                handleClickEdit={handleClickEdit}
                handleSaveEdit={handleSaveEdit}
                editId={editId}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                messageErr={messageErr}
                handelAddSubtasks={handelAddSubtasks}
                tasks={tasks}
                setAddtasks={setAddtasks}
            />
        </>
    );
}
