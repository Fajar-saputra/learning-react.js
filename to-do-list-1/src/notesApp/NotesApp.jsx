import React, { useState } from "react";
import { v4 } from "uuid";
import FormNote from "./FormNote";
import NoteItem from "./NoteItem";
import useLogic from "./useLogic";

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
        handleUpdatedSubnote
    } = useLogic();
    

    return (
        <div>
            <h2> Testing dulu gak ish</h2>

            <FormNote handleAddNote={handleAddNote}  note={note} setNote={setNote}/>

            <NoteItem
                notes={notes}
                setNote={setNote}
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
                handleUpdatedSubnote={handleUpdatedSubnote}
            />
        </div>
    );
}

export default NotesApp;
