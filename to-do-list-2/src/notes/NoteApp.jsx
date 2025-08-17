import { useState } from "react";
import NotesForm from "./NotesForm";
import NoteList from "./NotesList";

let id = 0;
const initialNotes = [
    { id: id++, text: "Belajar reactJS dasar", done: false },
    { id: id++, text: "Belajar python dasar", done: false },
    { id: id++, text: "Belajar css flexbox", done: false },
    { id: id++, text: "Belajar AI dan deep learning", done: false },
    { id: id++, text: "Belajar bahasa inggris", done: false },
];

export default function NoteApp() {
    const [notes, setNotes] = useState(initialNotes);

    const [inputText, setInputText] = useState("");

    function handleAddNote() {
        const newNote =  { id: id++, text: inputText, done: false }
        setNotes([...notes, newNote]);
        setInputText("")
        // console.log("berhasil ditambahkan "+ textInput);
    }

    function handleChangeNote(noteArr) {
        setNotes(prevNotes => prevNotes.map((note) => (note.id === noteArr.id ? { ...note, text: noteArr } : note)));
    }

    function handleDeleteNote(noteArr) {
        setNotes(prevNotes => prevNotes.filter((note) => note.id !== noteArr.id));
    }

    return (
        <>
            <h1>Note App</h1>
            {/* <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter note..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button onClick={handleAddNote}>Add</button>
            </form>
            <ol>
                {notes.map(note => (
                    <li key={note.id}>{ note.text }</li>
                ))}
            </ol> */}

            
        </>
    );
}
