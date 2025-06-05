import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import LogicTodo from "./hooks/LogicTodo";

export default function Todo() {
    const { todos, inputTodo, setInputTodo, handleAddTodos, handleDeleteTodos, messageErr, editId, setEditTodo, editTodo, handleClickEdit, handleSaveEdit } = LogicTodo();
    return (
        <div>
            <h1>Testing hello word</h1>
            <FormTodo inputTodo={inputTodo} setInputTodo={setInputTodo} handleAddTodos={handleAddTodos} messageErr={messageErr}/>
            <ListTodo
                todos={todos}
                handleDeleteTodos={handleDeleteTodos}
                editId={editId}
                setEditTodo={setEditTodo}
                editTodo={editTodo}
                handleClickEdit={handleClickEdit}
                handleSaveEdit={handleSaveEdit}
                messageErr={messageErr}
            />
        </div>
    );
}
