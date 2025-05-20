export default function TodoList({ todos, toggleSubtask }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h4>{todo.title}</h4>
                    <ul>
                        {todo.subtasks.map((sub) => (
                            <li key={sub.id}>
                                <input
                                    type="checkbox"
                                    checked={sub.done}
                                    onChange={() => toggleSubtask(todo.id, sub.id)}
                                />
                                {sub.text}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
