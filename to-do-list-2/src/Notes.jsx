import { useReducer, useState } from "react";
import { v4 } from "uuid";

export default function Notes() {
    const [notes, setNotes] = useState([
        {
            id: v4(),
            title: "Rabu",
            tasks: [
                { id: v4(), task: "Belajar React Dasar", done: false },
                { id: v4(), task: "Belajar React Dasar", done: false },
                { id: v4(), task: "Belajar React Dasar", done: false },
                { id: v4(), task: "Belajar React Dasar", done: false },
            ]
        },
    ]);

    const [inputNote, setInputNote] = useState("");
    const [subNote, setSubNote] = useState("");

    function handleAddNote() {
        if (!inputNote.trim()) return;
        setNotes((prev) => [...prev, { id: v4(), title: inputNote, tasks: [] }]);
        setInputNote("");
    }
    
    function handleDeleteNote(noteID) {
        setNotes(notes => notes.filter(note => note.id !== noteID))
    }
    
    function  handleAddSubnote(noteID) {
        if (!subNote.trim()) return;
        setNotes(notes => notes.map(note => note.id === noteID ? 
            {...note, }
        ))
    }

    return (
        <div>
            <h2>DAFTAR NOTES</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter note..." value={inputNote} onChange={(e) => setInputNote(e.target.value)} />
                <button onClick={handleAddNote}>➕</button>
            </form>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <div>{note.title} <span><button type="button" onClick={() => handleDeleteNote(note.id)}>🗑</button></span></div>
                        <div>
                            <ul>
                                {note.tasks.map(item => (
                                    <li key={item.id}>{ item.task }</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
