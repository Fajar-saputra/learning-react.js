export default function Tasks({todo}) {
    return (
        <>
            <ul>
                {todo.subtasks.map(task => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </>
    )
}