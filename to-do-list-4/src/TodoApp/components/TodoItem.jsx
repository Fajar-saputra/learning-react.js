export default function TodoItem({ todos, setSubtaskInput, handleAddSubtask, subtaskInput }) {
    return (
        <ul>
            {todos.map((todo) => {
                <li key={todo.id}>
                    <strong>{todo.title}</strong>

                    {/* subtask list */}
                    <ul>
                        {todo.subtasks.map((subtask) => (
                            <li key={subtask.id}>{subtask.text}</li>
                        ))}
                    </ul>

                    {/* form tambah subtask */}
                    <input type="text" placeholder="Subtask..." value={subtaskInput[todo.id] || ""} onChange={(e) => setSubtaskInput({ ...subtaskInput, [todo.id]: e.target.value })} />
                    <button
                        onClick={() => {
                            handleAddSubtask(todo.id, subtaskInput[todo.id]);
                            setSubtaskInput({ ...subtaskInput, [todo.id]: "" });
                        }}
                    >
                        + Subtask
                    </button>
                </li>;
            })}
        </ul>
    );
}
