export default function FormTasks({ setInputTasks, inputTasks, handleAddTasks, handleIsShow }) {
    return (
        <>
            <input
                type="text"
                onChange={(e) => setInputTasks(e.target.value)}
                value={inputTasks}
                onBlur={handleAddTasks}
                placeholder="Enter task..."
                autoFocus
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddTasks();
                }}
            />
            <button type="button">Add</button>
            <button type="button" onClick={handleIsShow}>
                Cancel
            </button>
        </>
    );
}
