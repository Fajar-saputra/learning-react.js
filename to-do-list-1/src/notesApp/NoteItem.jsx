import Subnote from "./Subnote";

export default function NoteItem({
    notes,
    noteId,
    setNote,
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
    handleUpdatedSubnote,
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

                            <Subnote
                                note={note}
                                subnoteId={subnoteId}
                                setSubnoteTitle={setSubnoteTitle}
                                handleUpdatedSubnote={handleUpdatedSubnote}
                                subnoteTitle={subnoteTitle}
                                handleEditSubnote={handleEditSubnote}
                                handleDoneSubnote={handleDoneSubnote}
                                handleDeleteSubnote={handleDeleteSubnote}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
