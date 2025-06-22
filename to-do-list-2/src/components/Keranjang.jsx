import { useReducer } from "react";


const initialTodos = [
  {
    id: 1,
    title: "Belajar React",
    subtasks: [
      { id: 101, text: "Mengenal JSX" },
      { id: 102, text: "Memahami Props" }
    ]
  }
];


export default function Keranjang() {


    const [state, dispatch] = useReducer(reducerFunction, initialState);

    function todoReducer(state, action) {
  switch (action.type) {
    case "TAMBAH_TODO":
      return [...state, action.payload];

    case "HAPUS_TODO":
      return state.filter(todo => todo.id !== action.payload);

    case "EDIT_TODO":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );

    case "TAMBAH_SUBTASK":
      return state.map(todo =>
        todo.id === action.payload.todoId
          ? {
              ...todo,
              subtasks: [...todo.subtasks, action.payload.subtask]
            }
          : todo
      );

    default:
      return state;
  }
}


    return (
        <div>
            <h2>Keranjang Buah</h2>
            {/* input */}
            <form action="" onSubmit={handleAdd}>
                <input type="text" placeholder="Enter item" value={input} onChange={(e) => setInput(e.target.value)} />
                <button>Add</button>
            </form>
            <ul>
                <ul>
                    {/* mapping element */}
                    {list.map((item) => (
                        <li key={item.id}>
                            {/* ketika editId sama dengan item.id berjalan sesudah item diklik 2x oleh user */}
                            {editId === item.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onBlur={handleEditSubmit}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") handleEditSubmit();
                                    }}
                                    autoFocus
                                />
                            ) : (
                                <span onDoubleClick={() => handleEditStart(item.id, item.title)}>{item.title}</span>
                            )}
                            <button onClick={() => handleHapus(item.id)}>Hapus</button>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}
