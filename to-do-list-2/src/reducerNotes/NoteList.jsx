import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

export default function NoteList() {
    const { notes, dispatch } = useContext(NotesContext);

    // edit note
    const [editNoteId, setEditNoteId] = useState(null);
    const [editNoteText, setEditNoteText] = useState("");
    // subnote
    const [inputSubnote, setInputSubnote] = useState("");
    const [editSubnoteId, setEditSubnoteId] = useState(null);
    const [editSubnoteText, SetEditSubnoteText] = useState("");
    const [isDoneSubnote, setIsDoneSubnote] = useState(false);

    function handleAddSubnote(e, noteId) {
        e.preventDefault();
        const text = inputSubnote[noteId]?.trim();
        dispatch({
            type: "ADD_TASK",
            noteId,
            text,
        });

        setInputSubnote((prev) => ({ ...prev, [noteId]: "" }));
        console.log("berhasil ditambahkan : ", text);
    }

    function handleDeleteNote(noteId) {
        dispatch({
            type: "DELETE_NOTE",
            noteId,
        });
    }

    function handleDeleteSubnote(noteId, taskId) {
        dispatch({
            type: "DELETE_TASK",
            noteId,
            taskId,
        });
    }

    function handleUpdateNote() {
        dispatch({
            type: "UPDATE_NOTE",
            noteId: editNoteId,
            text: editNoteText,
        });
        handleCancelEditNote();
    }

    function handleCancelEditNote() {
        setEditNoteId(null);
        setEditNoteText("");
    }

    function handleEditNote(noteId, noteTitle) {
        setEditNoteId(noteId);
        setEditNoteText(noteTitle);
    }

    function handleUpdateSubnote(noteId) {
        dispatch({
            type: "UPDATE_TASK",
            noteId,
            taskId: editSubnoteId,
            text: editSubnoteText,
        });

        handleCancelEditSubnote();
    }

    function handleCancelEditSubnote() {
        setEditSubnoteId(null);
        SetEditSubnoteText("");
    }

    function handleEditSubnote(taskId, taskText) {
        setEditSubnoteId(taskId);
        SetEditSubnoteText(taskText);
    }

    function handleDoneSubnote(noteId, taskId) {
        dispatch({
            type: "TOGGLE_TASK",
            noteId,
            taskId,
        });

        setIsDoneSubnote(!isDoneSubnote);

        console.log("berhasil di done");
    }

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        {editNoteId === note.id ? (
                            <div>
                                <p>
                                    <strong>Sedang Edit Title Note</strong>
                                </p>
                                <form>
                                    <input type="text" value={editNoteText} onChange={(e) => setEditNoteText(e.target.value)} />
                                    <button type="button" onClick={handleUpdateNote}>
                                        📑
                                    </button>
                                    <button type="button" onClick={handleCancelEditNote}>
                                        ✖
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                {note.title}
                                <span>
                                    <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                        🗑
                                    </button>
                                    <button type="button" onClick={() => handleEditNote(note.id, note.title)}>
                                        ⚙
                                    </button>
                                </span>
                                <form onSubmit={(e) => handleAddSubnote(e, note.id)}>
                                    <input
                                        type="text"
                                        placeholder="Enter task.."
                                        value={inputSubnote[note.id] || ""}
                                        onChange={(e) => setInputSubnote({ ...inputSubnote, [note.id]: e.target.value })}
                                    />
                                    <button type="submit">➕</button>
                                </form>
                            </div>
                        )}
                        <div>
                            <ul>
                                {note.tasks.map((task) => (
                                    <li key={task.id}>
                                        {editSubnoteId === task.id ? (
                                            <div>
                                                <p>Sedang edit subnote</p>
                                                <form>
                                                    <input type="text" value={editSubnoteText} onChange={(e) => SetEditSubnoteText(e.target.value)} />
                                                    <button type="button" onClick={() => handleUpdateSubnote(note.id)}>
                                                        📑
                                                    </button>
                                                    <button type="button" onClick={handleCancelEditSubnote}>
                                                        ✖
                                                    </button>
                                                </form>
                                            </div>
                                        ) : (
                                            <div>
                                                <span>{task.done === true ? <p style={{ color: "green" }}>{task.task}</p> : <p>{task.task}</p>}</span>

                                                <button type="button" onClick={() => handleDeleteSubnote(note.id, task.id)}>
                                                    🗑
                                                </button>
                                                <button type="button" onClick={() => handleEditSubnote(task.id, task.task)}>
                                                    ⚙
                                                </button>
                                                <button type="button" onClick={() => handleDoneSubnote(note.id, task.id)}>
                                                    ✔
                                                </button>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
