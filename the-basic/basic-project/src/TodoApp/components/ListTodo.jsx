import FormTasks from "./FormTasks";
import ListTasks from "./ListTasks";

export default function ListTodo({
    todos,
    handleDeleteTodos,
    todoErr,
    setTodoErr,
    setEditTodo,
    editId,
    editTodo,
    setTodos,
    handleClickEdit,
    handleSaveEdit,
    isEditing,
    handleIsEdit,
    handleAddTasks,
    setInputTasks,
    inputTasks,
    showInput,
    handleIsShow,
}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ display: "flex", gap: ".4rem" }}>
                    {todo.id === editId ? (
                        <div>
                            <input
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                                onBlur={handleSaveEdit}
                                autoFocus
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSaveEdit();
                                }}
                            />

                            {todoErr ? <p style={{ color: "hotpink" }}>{todoErr}</p> : null}
                        </div>
                    ) : (
                        <div onDoubleClick={() => handleClickEdit(todo.id, todo.title)} style={{ cursor: "pointer" }}>
                            <span>{todo.title}</span>
                            {/* mapping task */}
                            <ListTasks todo={todo} />
                        </div>
                    )}

                    <span>
                        <button type="button" onClick={() => handleDeleteTodos(todo.id)}>
                            X
                        </button>
                        {showInput ? (
                            <FormTasks setInputTasks={setInputTasks} inputTasks={inputTasks} handleAddTasks={() => handleAddTasks(todo.id)} handleIsShow={handleIsShow} />
                        ) : (
                            <button type="button" onClick={handleIsShow}>
                                + Task
                            </button>
                        )}
                    </span>
                </li>
            ))}
        </ul>
    );
}
