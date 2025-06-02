import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";
import LogicTodo from "./hooks/LogicTodo";

export default function TodoApp() {
    const { todos,handleAddTodo, setInputTodo, inputTodo, editId, handleStartEdit, handleSaveEdit, editTodo } = LogicTodo();

    return (
        <div>
            <h1> Testing Todo aja</h1>
            <p>{editId}</p>
            <FormTodo handleAddTodo={handleAddTodo} setInputTodo={setInputTodo} inputTodo={inputTodo}/>
            <ListTodo todos={todos} editId={editId} handleSaveEdit={handleSaveEdit} handleStartEdit={handleStartEdit} editTodo={editTodo}/>
        </div>
    );
}
