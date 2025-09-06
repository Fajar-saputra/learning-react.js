import { useReducer, useState } from "react";
// import { v4 } from "uuid";

function todoReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: v4(),
          title: action.text,
          tasks: [],
        },
      ];

    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);

    case "ADD_SUBTODO":
      return todos.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              tasks: [
                ...todo.tasks,
                {
                  id: v4(),
                  task: action.text,
                  done: false,
                },
              ],
            }
          : todo
      );

    case "TOGGLE_SUBTODO":
      return todos.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              tasks: todo.tasks.map((sub) =>
                sub.id === action.subId ? { ...sub, done: !sub.done } : sub
              ),
            }
          : todo
      );

    case "DELETE_SUBTODO":
      return todos.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              tasks: todo.tasks.filter((sub) => sub.id !== action.subId),
            }
          : todo
      );

    default:
      return todos;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputTodo, setInputTodo] = useState("");
  const [subInputs, setSubInputs] = useState({});

  // ➕ Tambah todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputTodo.trim()) return;
    dispatch({ type: "ADD_TODO", text: inputTodo });
    setInputTodo("");
  };

  // ➕ Tambah sub todo
  const handleAddSubTodo = (todoId) => {
    if (!subInputs[todoId]?.trim()) return;
    dispatch({
      type: "ADD_SUBTODO",
      id: todoId,
      text: subInputs[todoId],
    });
    setSubInputs({ ...subInputs, [todoId]: "" });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>📝 Todo App dengan Sub Todo</h2>

      {/* Input Todo */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Masukkan todo..."
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button type="submit">➕</button>
      </form>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <button onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}>
              🗑
            </button>

            {/* Input Sub Todo */}
            <div>
              <input
                type="text"
                placeholder="Subtask..."
                value={subInputs[todo.id] || ""}
                onChange={(e) =>
                  setSubInputs({ ...subInputs, [todo.id]: e.target.value })
                }
              />
              <button onClick={() => handleAddSubTodo(todo.id)}>➕ Sub</button>
            </div>

            {/* List Sub Todo */}
            <ul>
              {todo.tasks.map((sub) => (
                <li key={sub.id}>
                  <span
                    style={{
                      textDecoration: sub.done ? "line-through" : "none",
                      marginRight: "1rem",
                    }}
                  >
                    {sub.task}
                  </span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "TOGGLE_SUBTODO",
                        todoId: todo.id,
                        subId: sub.id,
                      })
                    }
                  >
                    ✔
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DELETE_SUBTODO",
                        todoId: todo.id,
                        subId: sub.id,
                      })
                    }
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
