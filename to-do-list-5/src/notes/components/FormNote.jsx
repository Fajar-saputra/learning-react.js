export default function FormNote({note, setNote, handleAddNote}) {
    return (
        <form onSubmit={handleAddNote}>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="New note..." />
            <button type="submit">✔</button>
        </form>
    )
}