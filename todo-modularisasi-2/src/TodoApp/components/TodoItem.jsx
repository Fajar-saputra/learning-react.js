export default function TodoItem({
    todo,
    editID,
    editTodo,
    handleTangkapEdit,
    handleEditTodo,
    handleHapusTodo,
    setEditTodo,
}) {
    return (
        <li key={todo.id}>
            {todo.id === editID ?
                (<input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    onBlur={handleEditTodo}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEditTodo();
                    }}
                />
                ) : (<span onDoubleClick={() => handleTangkapEdit(todo.id, todo.title)}> {todo.title}</span>)
            }

            <button type="submit" onClick={() => handleHapusTodo(todo.id)}>Hapus</button>
        </li>
    );
}


