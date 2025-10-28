export default function SubtodoItem({todo, handleDeleteSubtodo, handleDoneSubtodo}) {
    return (
        <ul>
            {todo.subtodo.map((sub) => (
                <li key={sub.id}>
                    <span style={{ color: sub.isDone ? "green" : "white" }}>{sub.title}</span>
                    <button onClick={() => handleDoneSubtodo(todo.id, sub.id)}>✔</button>
                    <button onClick={() => handleDeleteSubtodo(todo.id, sub.id)}>🗑</button>
                </li>
            ))}
        </ul>
    );
}
