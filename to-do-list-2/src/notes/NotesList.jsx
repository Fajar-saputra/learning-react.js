import Note from "./Note";

export default function NoteList({notes, onChange, onDelete, handleChangeDone}) {
    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <Note note={note} onChange={onChange} onDelete={onDelete} handleChangeDone={handleChangeDone}/>
                </li>
            ))}
        </ul>
    )
}