import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export default function NotesList() {
    const { notes, dispatch } = useContext(NotesContext);

    return (
        <div className="container_notes">
            {/* note */}
            {notes.map((note) => (
                <div key={note.id} className="card_notes">
                    <div>
                        <div>
                            {note.done === true ? <span style={{ color: "red" }}>{note.title}</span> : <span>{note.title}</span>}
                            <button type="button" onClick={() => dispatch({ type: "DELETE_NOTE", payload: { noteId: note.id } })}>
                                🗑
                            </button>
                            <button type="button" onClick={() => dispatch({ type: "DONE_NOTE", payload: { noteId: note.id } })}>
                                ✔
                            </button>
                        </div>
                        <form onSubmit={(e) => handleAddTask(e, todo.id)}></form>
                    </div>
                    <ul>
                        {/* tasks */}
                        {note.tasks.map((task) => (
                            <div>
                                <li key={task.id}>
                                    <div>
                                        {task.done === true ? <span style={{ color: "red" }}>{task.title}</span> : <span>{task.title}</span>}
                                        <button type="button" onClick={() => dispatch({ type: "DELETE_SUB1", payload: { noteId: note.id, taskId: task.id } })}>
                                            🗑
                                        </button>
                                        <button type="button" onClick={() => dispatch({ type: "DONE_SUB1", payload: { noteId: note.id, taskId: task.id } })}>
                                            ✔
                                        </button>
                                    </div>
                                    {/* sub */}
                                    <ul>
                                        {task.sub.map((subItem) => (
                                            <li key={subItem.id}>
                                                <div>
                                                    {subItem.done === true ? <span style={{ color: "red" }}>{subItem.title}</span> : <span>{subItem.title}</span>}
                                                    <button type="button" onClick={() => dispatch({ type: "DELETE_SUB2", payload: { noteId: note.id, taskId: task.id, subId: subItem.id } })}>
                                                        🗑
                                                    </button>
                                                    <button type="button" onClick={() => dispatch({ type: "DONE_SUB2", payload: { noteId: note.id, taskId: task.id, subId: subItem.id } })}>
                                                        ✔
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
