import FormTasks from "./FormTasks";
import ListTasks from "./ListTasks";

export default function ListTodo({
    todos,
    handleDeleteTodos,
    messageErr,
    setEditTodo,
    editId,
    editTodo,
    handleClickEdit,
    handleSaveEdit,
    isEditing,
    handleIsEdit,
    handleAddTasks,
    setInputTask,
    inputTask,
    showInput,
    handleIsShow,
}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ display: "flex", alignItems: "center" }}>
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

                            {messageErr ? <p style={{ color: "hotpink" }}>{messageErr}</p> : null}
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
                            <FormTasks setInputTasks={setEditTodo} inputTask={inputTask} handleAddTasks={handleAddTasks}/>
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
