import SubtasksForm from "./SubtasksForm";

export default function TodoItem({ todos, handleAddSubtask, subtaskInput,setSubtaskInput }) {
    return (
        <ul>
            {/* mapping for todo */}
            {todos.map((todo) => {
                return (
                    <>
                        <li key={todo.id}>
                            <span>{todo.title}</span>
                            <SubtasksForm handleAddSubtask={() => handleAddSubtask(todo.id)} subtaskInput={subtaskInput} setSubtaskInput={setSubtaskInput}/>
                        </li>
                        <ul>
                            {/* mapping for subtasks */}
                            {todo.subtasks.map(task => {
                                return (
                                    <li key={task.id}>{task.text}</li>
                                )
                            })}
                        </ul>
                    </>
                );
            })}
        </ul>
    );
}
