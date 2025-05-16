import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Belajar React" },
    { id: 2, title: "Ngoding modular JS" }
  ]);

  const [inputValue, setInputValue] = useState(""); // 🔹 controlled input

  const handleHapus = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault(); // 🔹 mencegah reload
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: inputValue
    };

    setTodos([...todos, newTodo]); // 🔹 tambahkan ke array
    setInputValue(""); // 🔹 reset input
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* 🔹 Form Input */}
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Tambahkan todo baru"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>

      {/* 🔹 Daftar Todo */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleHapus(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
