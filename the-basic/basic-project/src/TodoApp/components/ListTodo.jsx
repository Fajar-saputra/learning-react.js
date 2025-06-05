export default function ListTodo({ todos, handleDeleteTodos, messageErr, setEditTodo, editId, editTodo, handleClickEdit, handleSaveEdit }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{display: "flex", alignItems:"center"}}>
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

                            {messageErr && <p style={{ color: "hotpink" }}>{messageErr }</p>}
                        </div>
                    ) : (
                            <span onDoubleClick={() => handleClickEdit(todo.id, todo.title)} style={{cursor: "pointer"}}>{todo.title} - {messageErr}</span>
                    )}

                    <span>
                        <button type="button" onClick={() => handleDeleteTodos(todo.id)}>
                            X
                        </button>
                        <button type="button">+ Task</button>
                    </span>
                </li>
            ))}
        </ul>
    );
}
