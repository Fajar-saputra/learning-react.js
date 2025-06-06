export default function FormTasks({ setInputTasks, inputTask, handleAddTasks }) {
    return (
        <>
            <input
                type="text"
                onChange={setInputTasks}
                value={inputTask}
                onBlur={handleAddTasks}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddTasks();
                }}
            />
        </>
    );
}
