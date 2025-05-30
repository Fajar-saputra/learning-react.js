import { useState } from "react";

export default function UseTodosLogic() {
    const [todos, setTodos] = useState([{ id: 123, title: "Testing aja", subtasks: [] }]);
    // input todo
    const [inputTodos, setInputTodos] = useState("");
    // edit todo
    const [editId, setEditId] = useState(null);
    const [editTodo, setEditTodo] = useState("");
    // handel error
    const [messageErr, setMessageErr] = useState("");
    // add subtasks
    const [tasks, setAddtasks] = useState("");

    // add todo
    const handleAddTodo = (e) => {
        e.preventDefault();

        const trimmedInput = inputTodos.trim();

        if (trimmedInput === "") {
            alert("Todo tidak boleh kosong!");
            return;
        }

        if (trimmedInput.length <= 4) {
            alert("Minimal 5 karakter!!");
            return;
        }

        const duplicated = todos.some((todo) => todo.title.toLowerCase() === trimmedInput.toLowerCase());

        if (duplicated) {
            alert("Todo sudah ada!!");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: trimmedInput,
            subtasks: [],
        };

        setTodos([...todos, newTodo]);
        setInputTodos("");
    };

    const handleClickEdit = (id, title) => {
        setEditId(id);
        setEditTodo(title);
    };

    const handleSaveEdit = () => {
        const text = editTodo.trim();

        if (text.length <= 4) {
            setMessageErr("Minimal 5 karakter!");
            return;
        }

        const isDuplicateWithOtherItems = todos.some((todo) => todo.id !== editId && todo.title.toLowerCase() === text.toLowerCase());

        if (isDuplicateWithOtherItems) {
            setMessageErr("Judul ini sudah digunakan oleh todo lain!");
            return;
        }

        const updatedTodos = todos.map((todo) => (todo.id === editId ? { ...todo, title: text } : todo));

        setTodos(updatedTodos);

        setEditId(null);
        setEditTodo("");
        setMessageErr("");
    };

    const handelAddSubtasks = (id) => {
        // 1. Konsistensi nama variabel untuk input teks
        const newSubtaskText = tasks.trim(); // Asumsi 'tasks' adalah state untuk input teks

        // 2. Validasi input
        if (newSubtaskText.length <= 4) {
            setMessageErr("Minimal 5 karakter!");
            return;
        }

        // 3. Objek subtask baru (perbaiki typo 'taks')
        const newSubtask = { id: Date.now(), task: newSubtaskText }; // Perbaikan: 'task' bukan 'taks'

        // 4. Perbarui array 'todos'
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                // Jika ID cocok, tambahkan newSubtask ke array subtasks yang sudah ada
                // Pastikan subtasks adalah array, jika belum ada, inisialisasi sebagai array kosong
                return {
                    ...todo,
                    subtasks: [...(todo.subtasks || []), newSubtask], // Gunakan spread operator untuk array
                };
            }
            return todo; // Kembalikan todo tanpa perubahan jika ID tidak cocok
        });

        setTodos(updatedTodos);

    
        setAddtasks("");
    };

    return {
        todos,
        inputTodos,
        setInputTodos,
        handleAddTodo,
        editTodo,
        editId,
        setEditTodo,
        handleClickEdit,
        handleSaveEdit,
        messageErr,
        setMessageErr,
    };
}
