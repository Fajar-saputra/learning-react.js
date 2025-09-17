import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export default function NotesList() {
    const { notes, dispatch } = useContext(NotesContext);

    // function handleDoneSub1(noteId, taskId) {

    //     console.log("diklik");
    // }

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <div>
                        {note.done === true ? <span style={{ color: "red" }}>{note.title}</span> : <span>{note.title}</span>}
                        <button type="button" onClick={() => dispatch({ type: "DELETE_NOTE", payload: { noteId: note.id } })}>
                            🗑
                        </button>
                        <button type="button" onClick={() => dispatch({ type: "DONE_NOTE", payload: { noteId: note.id } })}>
                            ✔
                        </button>
                    </div>
                    <ul>
                        {note.tasks.map((task) => (
                            <li key={task.id}>
                                <div>
                                    {task.done === true ? <span style={{ color: "yellow" }}>{task.title}</span> : <span>{task.title}</span>}
                                    <button type="button" onClick={() => dispatch({ type: "DELETE_SUB1", payload: { noteId: note.id, taskId: task.id } })}>
                                        🗑
                                    </button>
                                    <button type="button" onClick={() => dispatch({ type: "DONE_SUB1", payload: { noteId: note.id, taskId: task.id } })}>
                                        ✔
                                    </button>
                                </div>

                                {/* <ul>
                                    {note.tasks.sub.map(subItem => (
                                        <li key={subItem.id}>{subItem.title}</li>
                                    ))}
                                </ul> */}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}
