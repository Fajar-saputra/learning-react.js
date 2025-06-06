export default function ListTasks({ todo }) {
    return (
        <>
            <ul>
                {todo.subtask.map((task) => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </>
    );
}
