export default function SubtasksForm({handleAddSubtask, todoId, subtaskInput, setSubtaskInput}) {
    return (
        <form onSubmit={() => handleAddSubtask(todoId)}>
            <input type="text" placeholder="Enter task..." style={{ marginLeft: ".4rem" }} value={subtaskInput} onChange={(e) => setSubtaskInput(e.target.value)}/>
            <button type="button">+</button>
        </form>
    );
}
