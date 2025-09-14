import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

export default function NoteList() {
    const { notes, dispatch } = useContext(NotesContext);

    // edit note
    const [isEditingNote, setIsEditingNote] = useState(false);
    const [editNoteId, setEditNoteId] = useState(null);
    const [editNoteText, setEditNoteText] = useState("");
    // subnote
    const [inputSubnote, setInputSubnote] = useState("");
    const [isEditingSubnote, setIsEditingSubnote] = useState(false);

    function handleAddSubnote(e, noteId) {
        e.preventDefault();
        dispatch({
            type: "ADD_SUBNOTE",
            noteId: noteId,
            text: inputSubnote
        });
        // dispatch({
        //     type: "ADD_SUBNOTE",
        //     noteId: noteId,
        //     text: inputSubnote[noteId],
        // });

        setInputSubnote("");
        // setInputSubnote({ ...inputSubnote, [noteId]: "" });
        console.log("berhasil ditambahkan : ", inputSubnote);
    }

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <div>
                            {note.title}
                            <span>
                                <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                    🗑
                                </button>
                                <button type="button" onClick={() => handleEditNote(note.id, note.title)}>
                                    ⚙
                                </button>
                                {isEditingNote && (
                                    <form>
                                        <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                                        <button type="button" onClick={handleUpdateNote}>
                                            📑
                                        </button>
                                        <button type="button" onClick={handleCancelEditNote}>
                                            ✖
                                        </button>
                                    </form>
                                )}
                            </span>
                            <span>
                                <form onSubmit={(e) => handleAddSubnote(e, note.id)}>
                                    <input
                                        type="text"
                                        placeholder="Enter task.."
                                        value={inputSubnote}
                                        onChange={(e) => setInputSubnote( e.target.value)}
                                        // value={inputSubnote[note.id] || ""}
                                        // onChange={(e) => setInputSubnote({ ...inputSubnote, [note.id]: e.target.value })}
                                    />
                                    <button type="submit">➕</button>
                                </form>
                            </span>
                        </div>
                        <div>
                            <ul>
                                {note.tasks.length > 0 ? <p>benar</p> : <p>salah</p>}
                                {note.tasks.map((sub) => (
                                    <li key={sub.id}>{sub.text}</li>
                                ))}
                                {/* {note.tasks.map((sub) => (
                                    <li key={sub.id}>
                                        {sub.text}{" "}
                                        <span>
                                            <button type="button" onClick={() => handleDeleteSubnote(note.id, sub.id)}>
                                                🗑
                                            </button>
                                            <button type="button" onClick={() => handleEditSubnote(sub.id, sub.task, note.id)}>
                                                ⚙
                                            </button>
                                            {isEditSubnote && (
                                                <form>
                                                    <input type="text" value={editSubnote[note.id]} onChange={(e) => setEditSubnote(e.target.value)} />
                                                    <button type="button" onClick={handleSaveEditSubnote}>
                                                        📑
                                                    </button>
                                                    <button type="button" onClick={handleCancelEditSbnote}>
                                                        ✖
                                                    </button>
                                                </form>
                                            )}
                                        </span>
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
