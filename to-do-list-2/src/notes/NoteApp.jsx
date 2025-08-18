import { useState } from "react";
import NotesForm from "./NotesForm";
import NoteList from "./NotesList";
import Note from "./Note";

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
        setNotes([...notes, { id: id++, text: inputText, done: false }]);
        setInputText("")
    }

    function handleChangeDone(notes) {
        setNotes(prevNotes => prevNotes.map((item) => (item.id === notes.id ? { ...item, done: !done } : item)));
    }

    function handleChangeNote(notes) {
        
    }

    function handleDeleteNote(noteArr) {
        setNotes(prevNotes => prevNotes.filter((note) => note.id !== noteArr.id));
    }

    return (
        <>
            <h1>Note App</h1>
            <NotesForm handleAddNote={handleAddNote} inputText={inputText} setInputText={setInputText} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} handleChangeDone={handleChangeDone}/>
        </>
    );
}
