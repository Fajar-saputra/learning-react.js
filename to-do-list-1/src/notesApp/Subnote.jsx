export default function Subnote({ note, subnoteId, handleUpdatedSubnote, setSubnoteTitle, subnoteTitle, handleEditSubnote, handleDoneSubnote, handleDeleteSubnote }) {
    return (
        <ul>
            {note.subnote.map((sub) => (
                <li key={sub.id}>
                    {sub.id === subnoteId ? (
                        <div>
                            <span>Sedang diedit!! </span>
                            <form onSubmit={(e) => handleUpdatedSubnote(e, note.id)}>
                                <input type="text" value={subnoteTitle} onChange={(e) => setSubnoteTitle(e.target.value)} />
                                <button type="submit">✔</button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            {sub.isDone ? <span style={{ color: "green" }}>{sub.title}</span> : <span>{sub.title}</span>}
                            <button type="button" onClick={() => handleEditSubnote(sub.id, sub.title)}>
                                ⚙
                            </button>
                            <button type="button" onClick={() => handleDoneSubnote(note.id, sub.id)}>
                                ✔
                            </button>
                            <button type="button" onClick={() => handleDeleteSubnote(note.id, sub.id)}>
                                🗑
                            </button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}
