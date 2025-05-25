import React from 'react'; // React perlu di-import, meskipun tidak langsung menggunakan JSX di sini, tapi itu praktik yang baik.

export default function TodosList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}> {/* Menggunakan todo.id sebagai key, asumsi ada */}
                    <span>{todo.title}</span> {/* Mengakses title dari objek todo */}

                    {/* Conditional rendering: Hanya tampilkan sub-list jika ada subtasks */}
                    {/* Check if todo.subtasks exists AND it's an array with items */}
                    {todo.subtasks && todo.subtasks.length > 0 && (
                        <ul style={{ listStyleType: 'circle', marginLeft: '20px', fontSize: '0.9em', color: '#555' }}>
                            {/* Memetakan subtasks dari objek 'todo' yang sedang diiterasi */}
                            {todo.subtasks.map((task) => (
                                // Jika subtask adalah string, gunakan subIndex sebagai key (opsi paling sederhana)
                                // Jika subtask adalah objek {id, text}, gunakan key={subtask.id} dan tampilkan {subtask.text}
                                <li key={task.id}>
                                    {task.text} {/* Menampilkan langsung nilai subtask (asumsi string) */}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}