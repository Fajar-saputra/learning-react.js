export default function TodoItem({
    todo,
    editID,
    editText,
    handleStartEdit,
    handleEditSubmit,
    handleHapus,
    setEditText,
}){
    return (
        <li key={todo.id}>
            {/* apakah todo.id sama editID yang diklik 2x sama */}
            {todo.id === editID ? (
                // jika iya tampilkan edit
                < input
                    type="text"
                    value={editText}
                    onBlur={handleEditSubmit}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") handleEditSubmit() }
                    } 
                    autoFocus
                />  
            ) : (
                    // jika tidak tampilkan title
                <span onDoubleClick={() => handleStartEdit(todo)}>{todo.title}</span>
            )}
            
            <button type="submit" onClick={handleHapus}>Hapus</button>
        </li>


    )
}