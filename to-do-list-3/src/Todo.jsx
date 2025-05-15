import { useState } from "react";

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Belajar React" },
        { id: 2, title: "Ngoding modular JS" },
        { id: 3, title: "Refactor lokalStorage" },
    ]);

    const handleHapus = (id) => {
        const update = todos.filter((todo) => todo.id !== id);
        setTodos(update);
        console.log(update);
    };

    return (
        <div>
            <h2>List</h2>
            <ul>
                <ul>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                {todo.title}
                                <button onClick={() => handleHapus(todo.id)}>Hapus</button>
                            </li>
                        );
                    })}
                </ul>
            </ul>
        </div>
    );
}
