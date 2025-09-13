import { useReducer } from "react";
import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";


// reducer
function NotesReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, { id: v4(), title: action.text, done: false }];
        case "DELETE_NOTE":
            return notes.filter((note) => note.id !== action.noteId);
        case "DONE_NOTE":
            return notes.map((note) => (note.id === action.noteId ? { ...note, done: !note.done } : note));

        default:
            notes;
    }
}

// create context
const NotesContext = createContext(null);


// provider
function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(NotesReducer, []);
    return <NotesContext.Provider value={{ notes, dispatch }}>{children}</NotesContext.Provider>;
}

// komponen anak
function NotesList() {
    const { notes, dispatch } = useContext(NotesContext);

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>{note.title}</li>
            ))}
        </ul>
    );
}

function NoteForm() {
    const { dispatch } = useContext(NotesContext);
    const [input, setInput] = useState(" ");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            text: input
        })

        setInput(" ");  
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} placeholder="Note..." onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">+</button>
        </form>
    )
}

export default function ContextHard() {
    return (
        <NotesProvider>
            <h2>Notes (Reducer and Context)</h2>
            <NoteForm />
            <NotesList />
        </NotesProvider>
    );
}
 