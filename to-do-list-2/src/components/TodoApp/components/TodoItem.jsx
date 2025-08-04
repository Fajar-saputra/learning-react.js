import React from 'react'; // Penting untuk <React.Fragment> jika kamu menggunakannya

export default function TodoItem({
    todos,
    handleAddSubtask,
    subtaskInput,
    setSubtaskInput,
    // Props untuk Todo
    handleDeleteTodo,
    handleEditTodo,
    handleSaveEditTodo,
    handleCancelEditTodo,
    editingTodoId,
    editingTodoText,
    setEditingTodoText,
    // Props untuk Subtask
    handleDeleteSubtask,
    handleEditSubtask,
    handleSaveEditSubtask,
    handleCancelEditSubtask,
    editingSubtaskId,
    editingSubtaskText,
    setEditingSubtaskText,
}) {
    return (
        <ol>
            {/* Mapping untuk todo utama */}
            {todos.map((todo) => {
                // Tentukan apakah todo ini sedang dalam mode edit  
                const isEditingTodo = editingTodoId === todo.id;

                return (
                    // Menggunakan fragment jika tidak ada elemen root lain
                    <li key={todo.id}>
                        {isEditingTodo ? (
                            // Render form edit jika todo sedang diedit
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSaveEditTodo(todo.id);
                            }}>
                                <input
                                    type="text"
                                    value={editingTodoText}
                                    onChange={(e) => setEditingTodoText(e.target.value)}
                                    style={{ marginRight: ".4rem" }}
                                />
                                <button type="submit">✔</button>
                                <button type="button" onClick={handleCancelEditTodo}>✖</button>
                            </form>
                        ) : (
                            // Render teks todo biasa dan tombol jika tidak dalam mode edit
                            <>
                                <span>{todo.title}</span>
                                <button onClick={() => handleEditTodo(todo.id, todo.title)} style={{ marginLeft: ".4rem" }}>⚙</button>
                                <button onClick={() => handleDeleteTodo(todo.id)} style={{ marginLeft: ".4rem" }}>🗑</button>
                            </>
                        )}

                        {/* Form untuk menambah subtask */}
                        <form onSubmit={(e) => {
                            e.preventDefault(); // Mencegah form melakukan refresh halaman
                            handleAddSubtask(todo.id);
                        }} style={{ marginTop: ".4rem" }}>
                            <input
                                type="text"
                                placeholder="Add subtask..."
                                style={{ marginLeft: ".4rem" }}
                                value={subtaskInput[todo.id] || ""}
                                onChange={(e) => setSubtaskInput({ ...subtaskInput, [todo.id]: e.target.value })}
                            />
                            <button type="submit" style={{ marginLeft: ".4rem" }}>+</button>
                        </form>

                        <ul>
                            {/* Mapping untuk subtasks */}
                            {todo.subtasks.map((subtask) => {
                                // Tentukan apakah subtask ini sedang dalam mode edit
                                const isEditingSubtask = editingSubtaskId === subtask.id;

                                return (
                                    <li key={subtask.id} style={{ marginLeft: "1.5rem" }}>
                                        {isEditingSubtask ? (
                                            // Render form edit jika subtask sedang diedit
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                handleSaveEditSubtask(todo.id, subtask.id);
                                            }}>
                                                <input
                                                    type="text"
                                                    value={editingSubtaskText}
                                                    onChange={(e) => setEditingSubtaskText(e.target.value)}
                                                    style={{ marginRight: ".4rem" }}
                                                />
                                                <button type="submit">Save</button>
                                                <button type="button" onClick={handleCancelEditSubtask}>Cancel</button>
                                            </form>
                                        ) : (
                                            // Render teks subtask biasa dan tombol jika tidak dalam mode edit
                                            <>
                                                <span>{subtask.text}</span>
                                                <button onClick={() => handleEditSubtask(subtask.id, subtask.text)} style={{ marginLeft: ".4rem" }}>⚙</button>
                                                <button onClick={() => handleDeleteSubtask(todo.id, subtask.id)} style={{ marginLeft: ".4rem" }}>🗑</button>
                                            </>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            })}
        </ol>
    );
}