import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

export default function NoteList() {
    const { notes, dispatch } = useContext(NotesContext);

    // edit note
    const [isEditingNote, setIsEditingNote] = useState(false);
    const [editNoteId, setEditNoteId] = useState(null);
    const [editNoteText, setEditNoteText] = useState("")
    // subnote
    const [inputSubnote, setInputSubnote] = useState("");
    const [isEditingSubnote, setIsEditingSubnote] = useState(false);

    function handleAddSubnote(noteId) {
        dispatch({
            type: "ADD_SUBNOTE",
            noteId : noteId,
            text: inputSubnote[noteId]
        })

        setInputSubnote({...inputSubnote, [noteId] : ""})
        console.log("berhasil ditambahkan : ", inputSubnote);
        
    }
    
    function handleDeleteNote(noteId) {
        dispatch({
            type: "DELETE_NOTE",
            noteId
        });

        console.log("berhasil dihapus id: ", noteId);
        
    }

    function handleDoneSubnote(noteId) {
        dispatch({
            type: "DONE_SUBNOTE",
            noteId
        })
    }

    function handleUpdateNote(noteId) {
        dispatch({
            type: "ADD_SUBTODO",
            noteId: noteId,
            text: inputSubnote
        });
    }

    function handleEditStart(note) {
        setEditNoteId(note.id)
        setEditNoteText(note.title)
    }
    
    function handleCancelEditNote() {
        setEditNoteId(null);
        setEditNoteText("");
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
                             <input
                                 type="text"
                                 placeholder="Enter task.."
                                 value={inputSubnote[note.id] || ""}
                                //  value={inputSubnote}
                                 onChange={(e) => setInputSubnote({...inputSubnote, [note.id]:  e.target.value})}
                                //  onChange={(e) => setInputSubnote(e.target.value)}
                             />
                                <button onClick={() => handleAddSubnote(note.id)}>➕</button>
                            </span>
                        </div>
                        <div>
                            <ul>
                                {note.tasks.map((sub) => (
                                    <li key={sub.id}>
                                        {sub.text}{" "}
                                        {/* <span>
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
                                        </span> */}
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
