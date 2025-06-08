import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import LogicTodo from "./hooks/LogicTodos";

export default function Todo() {
    const { todos, inputTodo, setInputTodo, handleAddTodos, handleDeleteTodos, todoErr, setTodoErr, editId, setEditTodo, editTodo, handleClickEdit, handleSaveEdit,  handleAddTasks, setInputTask, inputTask, showInput, setShowInput, handleIsShow } = LogicTodo();

    return (
        <div>
            <h1>Testing hello word</h1>
            <FormTodo inputTodo={inputTodo} setInputTodo={setInputTodo} handleAddTodos={handleAddTodos} setTodoErr={setTodoErr} todoErr={todoErr} />
            <ListTodo
                // todos
                todos={todos}
                handleDeleteTodos={handleDeleteTodos}
                editId={editId}
                setEditTodo={setEditTodo}
                editTodo={editTodo}
                handleClickEdit={handleClickEdit}
                handleSaveEdit={handleSaveEdit}
                setTodoErr={setTodoErr}
                todoErr={todoErr}
                // tasks
                handleIsShow={handleIsShow}
                handleAddTasks={handleAddTasks}
                setInputTask={setInputTask}
                inputTask={inputTask}
                showInput={showInput}
            />
        </div>
    );
}
