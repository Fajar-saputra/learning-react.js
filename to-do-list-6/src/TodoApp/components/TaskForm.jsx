import { useState } from "react";

export default function TaskForm({ task, setAddtasks, handelAddSubtasks, id }) {
    const [isClick, setIsClick] = useState(false);
    return (
        <>
            {isClick ? (
                <div style={{display: "flex", width:"fit-content"}}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handelAddSubtasks(id);
                        }}
                    >
                        <input type="text" value={task} placeholder="Enter task..." onChange={(e) => setAddtasks(e.target.value)} />
                        <button type="submit">Add</button>
                    </form>
                    <button type="button" onClick={() => setIsClick(false)}>Cancel</button>
                </div>
                    
            ) : (
                <button onClick={() => setIsClick(!false)}>Add task</button>
            )}
        </>
    );
}
