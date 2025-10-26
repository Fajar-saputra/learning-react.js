export default function FormNote({handleAddNote, note, setNote}) {
    return (
        <form onSubmit={(e) => handleAddNote(e)}>
            <input type="text" placeholder="New note..." value={note} onChange={(e) => setNote(e.target.value)} />
            <button type="submit">➕</button>
        </form>
    );
}
