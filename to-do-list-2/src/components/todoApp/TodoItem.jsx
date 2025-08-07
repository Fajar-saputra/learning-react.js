export default function TodoItem({todos}) {
    return (
        <>
                <ol>
            {todos.map(todo => (
                <li key={todo.id}>{ todo.text }</li>
            ))}
        </ol>
        </>
    )
}