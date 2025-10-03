export default function FormNote({text, setText, handleAddNote}) {
    return (
        <form onSubmit={handleAddNote}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="New note..." />
            <button type="submit">✔</button>
        </form>
    )
}