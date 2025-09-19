import { useContext } from "react"
import { NotesContext } from "./NotesContext"
import Note from "./Note";

export default function NotesList() {
    const notes = useContext(NotesContext);
    
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}><Note note={note} /></li>
            ))}
        </ul>
    )
}