import { createContext, useContext, useReducer, useState } from "react";

// 1️⃣ Reducer
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "TOGGLE_TODO":
      return state.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t
      );
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.id);
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

// 2️⃣ Context
const TodoContext = createContext();

// 3️⃣ Provider
function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

// 4️⃣ Custom Hook
function useTodos() {
  return useContext(TodoContext);
}

// 5️⃣ Komponen Anak
function TodoForm() {
  const { dispatch } = useTodos();
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambah todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➕</button>
    </form>
  );
}

function TodoList() {
  const { todos, dispatch } = useTodos();

  if (todos.length === 0) return <p>Belum ada todo.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "green" : "black",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}>
            ✔
          </button>
          <button onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}>
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}

// 🔑 Root Component
export default function TodoApp() {
  return (
    <TodoProvider>
      <h2>Todo App (Reducer + Context)</h2>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}