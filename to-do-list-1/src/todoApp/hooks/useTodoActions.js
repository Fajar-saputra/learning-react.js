// useTodoActions.js
export default function useTodoActions(dispatch, inpTodo, setInpTodo, setEditId, setEditTitle, inpSub, setInpSub) {
    // 1️⃣ Tambah Todo
    function handleAddTodo(e) {
        e.preventDefault();
        if (!inpTodo.trim()) return;

        dispatch({
            type: "ADD_TODO",
            payload: { title: inpTodo },
        });

        setInpTodo("");
    }

    // 2️⃣ Hapus Todo
    function handleDeleteTodo(todoId) {
        dispatch({
            type: "DELETE_TODO",
            payload: { todoId },
        });
    }

    // 3️⃣ Selesai Todo
    function handleDoneTodo(todoId) {
        dispatch({
            type: "DONE_TODO",
            payload: { todoId },
        });
    }

    // 4️⃣ Edit Todo
    function handleEditTodo(todoId, todoTitle) {
        setEditId(todoId);
        setEditTitle(todoTitle);
    }

    // 5️⃣ Update Todo
    function handleUpdateTodo(e, editId, editTitle) {
        e.preventDefault();

        dispatch({
            type: "UPDATE_TODO",
            payload: { todoId: editId, title: editTitle },
        });

        setEditId(null);
        setEditTitle("");
    }

    // 6️⃣ Tambah Subtodo
    function handleAddSubtodo(e, todoId) {
        e.preventDefault();

        const title = inpSub[todoId]?.trim();
        if (!title) return;

        dispatch({
            type: "ADD_SUBTODO",
            payload: { todoId, subTitle: title },
        });

        setInpSub((prev) => ({ ...prev, [todoId]: "" }));
    }

    // 7️⃣ Selesai Subtodo
    function handleDoneSubtodo(todoId, subId) {
        dispatch({
            type: "DONE_SUBTODO",
            payload: { todoId, subId },
        });
    }

    // 8️⃣ Hapus Subtodo
    function handleDeleteSubtodo(todoId, subId) {
        dispatch({
            type: "DELETE_SUBTODO",
            payload: { todoId, subId },
        });
    }

    // 9️⃣ (Optional) Edit Subtodo — nanti bisa ditambah

    // 🧾 Return semua handler biar bisa dipanggil di komponen utama
    return {
        handleAddTodo,
        handleDeleteTodo,
        handleDoneTodo,
        handleEditTodo,
        handleUpdateTodo,
        handleAddSubtodo,
        handleDoneSubtodo,
        handleDeleteSubtodo,
    };
}
