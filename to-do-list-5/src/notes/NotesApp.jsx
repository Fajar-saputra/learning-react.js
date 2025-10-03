import { useState } from "react";

export default function NotesApp() {
    let id = 0;

    const initialNotes = [
        { id: id++, title: "belajar react", isComplete: false },
        { id: id++, title: "belajar php", isComplete: false },
        { id: id++, title: "belajar C", isComplete: false },
        { id: id++, title: "belajar python", isComplete: false },
        { id: id++, title: "belajar flutter", isComplete: false },
        { id: id++, title: "belajar blender", isComplete: false },
        { id: id++, title: "belajar photoshop", isComplete: false },
        { id: id++, title: "belajar corelDraw", isComplete: false },
    ];
    const [notes, setNote] = useState(initialNotes);
    // note
    const [titleNote, setTitleNote] = useState("");
    const [message, setMessage] = useState("");
    const [editNote, setEditNote] = useState("");
    const [editNoteId, setEditNoteId] = useState(null);

    const handleAddNote = (e) => {
        e.preventDefault();

        if (titleNote.trim() === "") {
            setMessage("✖ Tidak boleh kosong!");
            return;
        }
        if (titleNote.trim().length < 5) {
            setMessage("✖ Minimal 6 karakter!");
            return;
        }

        const duplicated = notes.some((note) => note.title.toLowerCase() === titleNote.trim().toLowerCase());

        if (duplicated) {
            setMessage("✖ Note sudah ada!");
            return;
        }
        setNote((prev) => [...prev, { id: id++, title: titleNote.trim(), isComplete: false }]);
        setTitleNote("");
        setMessage("");
    };

    const handleIsCompletedNote = (noteId) => {
        setNote((notes) => notes.map((note) => (note.id === noteId ? { ...note, isComplete: !note.isComplete } : note)));
    };

    const handleDeleteNote = (noteId) => {
        setNote((notes) => notes.filter((note) => note.id !== noteId));
    };

    return (
        <div>
            <h2>Notes App</h2>
            <form onSubmit={handleAddNote}>
                <input type="text" value={titleNote} onChange={(e) => setTitleNote(e.target.value)} placeholder="New note..." />
                <button type="submit">✔</button>
            </form>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <div>
                {notes.map((note) => (
                    <div key={note.id}>
                        <span>{note.isComplete ? <span style={{ color: "red" }}>{note.title}</span> : <span>{note.title}</span>}</span>
                        <span>
                            <button type="button" onClick={() => handleIsCompletedNote(note.id)}>
                                ✔
                            </button>
                            <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                🗑
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
