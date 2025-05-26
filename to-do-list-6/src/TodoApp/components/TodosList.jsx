import React from 'react'; // React perlu di-import, meskipun tidak langsung menggunakan JSX di sini, tapi itu praktik yang baik.

export default function TodosList({ todos, setEditId, editId, setEditTodos, handleStartEdit, handleFinalEdit }) {
    return (
        <ul>
            {todos.map((todo) => {
                {
                    todo.id === editId ? <input /> : (
                    
                        <li key={todo.id}>
                            <span>{todo.title}</span>
                        </li>
                    )
                }
            })}
        </ul>
    );
}