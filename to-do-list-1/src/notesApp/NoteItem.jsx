export default function NoteItem({
    notes,
    noteId,
    noteTitle,
    setNoteTitle,
    // subnote
    subnoteId,
    subnoteTitle,
    setSubnoteTitle,
    // func note
    handleDeleteNote,
    handleDoneNote,
    handleEditNote,
    handleUpdatedNote,
    // func subnote
    handleDoneSubnote,
    handleDeleteSubnote,
    handleEditSubnote,
}) {
    return (
        <div>
            {notes.map((note) => (
                <div key={note.id}>
                    {note.id === noteId ? (
                        <div>
                            <span>tes aja dulu</span>
                            <form onSubmit={(e) => handleUpdatedNote(e)}>
                                <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
                                <button type="submit">✔</button>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <div>
                                {note.isDone ? <span style={{ color: "green" }}>{note.title}</span> : <span>{note.title}</span>}
                                <button type="button" onClick={() => handleDoneNote(note.id)}>
                                    ✔
                                </button>
                                <button type="button" onClick={() => handleEditNote(note.id, note.title)}>
                                    ⚙
                                </button>
                                <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                    🗑
                                </button>
                            </div>

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
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
