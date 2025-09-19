import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

export default function NotesList() {
    const { notes, dispatch } = useContext(NotesContext);
    // notes
    const [editNoteId, SetEditNoteId] = useState(null);
    const [editNoteTitle, SetEditNoteTitle] = useState("");

    // func notes
    function handleDeleteNote(noteId) {
        dispatch({
            type: "DELETE_NOTE",
            payload: { noteId: noteId },
        });
    }

    function handleEditNote(noteId, noteTitle) {
        SetEditNoteId(noteId);
        SetEditNoteTitle(noteTitle);
    }
    
    function handleCancelNote() {
        SetEditNoteId(null);
        SetEditNoteTitle("");    
    }

    function handleSaveNote() {
        dispatch({
            type: "UPDATE_NOTE",
            payload: { noteId: editNoteId, title: editNoteTitle },
        });

        handleCancelNote();
    }

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        {editNoteId === note.id ? (
                            <div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" value={editNoteTitle} onChange={(e) => SetEditNoteTitle(e.target.value)} />
                                    <button type="submit" onClick={handleSaveNote}>
                                        ✔
                                    </button>
                                    <button type="button" onClick={handleCancelNote}>
                                        ✖
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div>
                                {note.title}
                                <span>
                                    <button type="button" onClick={() => handleEditNote(note.id, note.title)}>
                                        ⚙
                                    </button>
                                </span>
                                <span>
                                    <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                        🗑
                                    </button>
                                </span>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
