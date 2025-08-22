export default function NoteForm({ onSubmit, input, onChange }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter subnote" value={input} onChange={onChange} />
            <button type="submit">➕</button>
        </form>
    );
}
