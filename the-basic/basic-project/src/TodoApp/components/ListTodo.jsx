export default function ListTodo({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>
                    {todo.title}
                        <button type="button">X</button>
                        <button type="button">+ Task</button>
                </span>
                </li>
            ))}
        </ul>
    );
}
