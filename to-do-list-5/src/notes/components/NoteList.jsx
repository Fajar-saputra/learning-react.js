export default function NoteList({ notes }) {
    return (
        <div>
            {notes.map((note) => (
                <div key={note.id}>{note.title}</div>
            ))}
        </div>
    );
}
