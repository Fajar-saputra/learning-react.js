export default function TodoItem({
    todo,
    editID,
    editText,
    handleStartEdit,
    handleEdit,
    handleHapus,
    setEditText,
}) {
    return (
        <li key={todo.id}>
            {editID === todo.id ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEdit}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEdit();
                    }}
                />
            ) : (
                <span onDoubleClick={() => handleStartEdit(todo.id, todo.title)}>
                    {todo.title}
                </span>
            )}
            <button onClick={() => handleHapus(todo.id)}>Hapus</button>
        </li>
    );
}
