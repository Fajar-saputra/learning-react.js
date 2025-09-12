import { createContext, useContext, useReducer, useState } from "react";
import { v4 } from "uuid";

// reducer (tempat action)
function NoteReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, { id: v4(), title: action.text, done: false }];
        case "DELETE_NOTE":
            return notes.filter((note) => note.id !== action.noteID);
        default:
            notes;
    }
}

// context
const ContextReducer = createContext(null);

// provider
function ReducerProvider({ children }) {
    const [notes, dispatch] = useReducer(NoteReducer, []);
    return <ContextReducer.Provider value={{ notes, dispatch }}>{children}</ContextReducer.Provider>;
}

// komponen
function NoteForm() {
    const { dispatch } = useContext(ContextReducer);
    const [addNote, setAddNote] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            text: addNote,
        });
        setAddNote("");
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Note...." value={addNote} onChange={(e) => setAddNote(e.target.value)} />
            <button type="submit">+</button>
        </form>
    );
}

function NoteList() {
    const { notes, dispatch } = useContext(ContextReducer);

    if (notes.lenght === 0) return <p>Belum ada notes.</p>;
    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <span>{note.title}  { note.id }</span>
                        <button type="button" onClick={() => dispatch({ type: "DELETE_NOTE", noteID: note.id })}>
                            🗑
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function NoteAppReducer() {
    return (
        <ReducerProvider>
            <h2>Testing App Note</h2>
            <NoteForm />
            <NoteList />
        </ReducerProvider>
    );
}
