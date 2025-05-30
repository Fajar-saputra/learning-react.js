export default function TodoList({ todos, editId, handleClickEdit, handleSaveEdit, editTodo, setEditTodo, messageErr }) {
    return (
        <ul>
            {todos.map((todo) => {
                const isEditingThisTodo = todo.id === editId;
                return (
                    <li key={todo.id}>
                        {isEditingThisTodo ? (
                            <>
                                <input
                                    type="text"
                                    onBlur={handleSaveEdit}
                                    value={editTodo}
                                    onChange={(e) => setEditTodo(e.target.value)}
                                    autoFocus
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSaveEdit();
                                        }
                                    }}
                                />
                                {/* Tampilkan pesan error hanya untuk item yang sedang diedit */}
                                {isEditingThisTodo && messageErr && (
                                    <span style={{ color: "red", fontSize: "0.8em", display: "block" }}>
                                        {messageErr}
                                    </span>
                                )}
                            </>
                        ) : (
                            <span onDoubleClick={() => handleClickEdit(todo.id, todo.title)}>{todo.title}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
