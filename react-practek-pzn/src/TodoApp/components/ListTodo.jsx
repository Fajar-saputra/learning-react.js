export default function ListTodo({ todos, editId, handleStartEdit, handleSaveEdit, editTodo }) {
    return (
        <ul>
            {/* mapping todo */}
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.id === editId ? (
                        // <input type="text" onBlur={handleSaveEdit} value={editTodo}/>
                        <span>ini berhasil</span>
                    ) : (
                        <div>
                            <span onDoubleClick={() => handleStartEdit(todo)}>{todo.title}</span>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}
