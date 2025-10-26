import React, { useState } from "react";
import { v4 } from "uuid";
import FormNote from "./FormNote";
import NoteItem from "./NoteItem";
import UseLogic from "./useLogic";

function NotesApp() {
    const {
        // notes
        notes,
        setNotes,
        note,
        setNote,
        noteId,
        setNoteId,
        noteTitle,
        setNoteTitle,
        // subnote
        subnoteId,
        setSubnoteId,
        subnoteTitle,
        setSubnoteTitle,
        // func note
        handleAddNote,
        handleDeleteNote,
        handleDoneNote,
        handleEditNote,
        handleUpdatedNote,
        // func subnote
        handleDoneSubnote,
        handleDeleteSubnote,
        handleEditSubnote,
    } = UseLogic();

    return (
        <div>
            <h2> Testing dulu gak ish</h2>
            <form onSubmit={(e) => handleAddNote(e)}>
                <input type="text" placeholder="New note..." value={note} onChange={(e) => setNote(e.target.value)} />
                <button type="submit">➕</button>
            </form>

            {/* <FormNote handleAddNote={handleAddNote} note={note} setNote={setNote}/> */}

            <NoteItem
                notes={notes}
                noteId={noteId}
                noteTitle={noteTitle}
                setNoteTitle={setNoteTitle}
                subnoteId={subnoteId}
                subnoteTitle={subnoteTitle}
                setSubnoteTitle={setSubnoteTitle}
                // func
                handleDoneNote={handleDoneNote}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
                handleUpdatedNote={handleUpdatedNote}
                // sub
                handleDoneSubnote={handleDoneSubnote}
                handleDeleteSubnote={handleDeleteSubnote}
                handleEditSubnote={handleEditSubnote}
            />
        </div>
    );
}

export default NotesApp;
