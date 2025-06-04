export default function ListTodo({ todos, handleDeleteTodos, messageErr }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span>
                        {todo.title}
                        <button type="button" onClick={() => handleDeleteTodos(todo.id)}>
                            X
                        </button>
                        <i>{ messageErr}</i>
                        <button type="button">+ Task</button>
                    </span>
                </li>
            ))}
        </ul>
    );
}
