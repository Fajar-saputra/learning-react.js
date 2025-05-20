export default function ItemTodo({todo, handleHapusTodo, handleStartEdit, handleEditTodo, editID, setEditTodo, editTodo}) {
    return (
        <li key={todo.id}>
            {todo.id === editID ?
                <input
                    type="text"
                    onChange={(e) => setEditTodo(e.target.value)}
                    autoFocus
                    onBlur={handleEditTodo}
                    value={editTodo}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEditTodo();
                    }} />
                : <span onDoubleClick={() => handleStartEdit(todo)}>{todo.title}</span>
            }

            
            <button type="button" onClick={() => handleHapusTodo(todo.id)}>Hapus</button>
        </li>
    )
}