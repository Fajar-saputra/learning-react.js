export default function ListTodo({ todos }) {
    return (
        <ul>
            {todos.map((todo) => (
                 <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}
