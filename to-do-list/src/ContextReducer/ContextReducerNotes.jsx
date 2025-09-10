import { useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./NotesContext";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

export default function ContextReducerNotes() {
    const [notes, dispatch] = useReducer(notesReducer, intialNotes);

    return (
        <div>
            <h2>testing dulu gak sih context reducer</h2>
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NotesForm />
                    <NotesList />
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    );
}
