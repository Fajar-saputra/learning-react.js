export default function FormTasks({ setInputTasks, inputTasks, handleAddTasks, handleIsShow }) {
    return (
        <>
            <input
                type="text"
                onChange={setInputTasks}
                value={inputTasks}
                onBlur={handleAddTasks}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddTasks();
                }}
            />
            <button type="button" onClick={handleIsShow}>Cancel</button>
        </>
    );
}
