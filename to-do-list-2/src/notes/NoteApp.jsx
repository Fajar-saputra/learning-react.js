import { useReducer, useState } from "react";
// import NotesForm from "./NotesForm";
// import NoteList from "./NotesList";
// import Note from "./Note";
import { v4 } from "uuid";

const initialNotes = [
    { id: v4(), text: "Belajar reactJS dasar", done: false },
    { id: v4(), text: "Belajar python dasar", done: false },
    { id: v4(), text: "Belajar css flexbox", done: false },
    { id: v4(), text: "Belajar AI dan deep learning", done: false },
    { id: v4(), text: "Belajar bahasa inggris", done: false },
];

function noteReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, { id: v4(), text: action.text, done: false }];
        case "DELETE_NOTE":
            return notes.filter((note) => note.id !== action.id);
        case "UPDATE_NOTE":
            return notes.map((note) => (note.id === action.id ? { ...note, text: action.text } : note));
        case "DONE_NOTE":
            return notes.map((note) => (note.id === action.id ? { ...note, done: !note.done } : note));

        default:
            return notes;
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useReducer(noteReducer, initialNotes);
    const [inputText, setInputText] = useState("");
    const [editID, setEditID] = useState(null);
    const [editText, setEditText] = useState("");

    function handleAddNote(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            text: inputText,
        });
    }

    function handleDeleteNote(id) {
        dispatch({
            type: "DELETE_NOTE",
            id,
        });
    }

    function handleDoneNote(id) {
        dispatch({
            type: "DONE_NOTE",
            id,
        });
    }

    function handleUpdateNote(e) {
        e.preventDefault();
        dispatch({
            type: "UPDATE_NOTE",
            id: id,
            text: text,
        });

        setEditID(null);
        setEditText("");
    }

    function handleStartEdit(id, text) {
        setEditID(id);
        setEditText(text);
    }

    return (
        <>
            <h1>Note App</h1>
            {/* <NotesForm handleAddNote={handleAddNote} inputText={inputText} setInputText={setInputText} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} handleChangeDone={handleChangeDone}/> */}

            <form action="">
                <input type="text" placeholder="New note..." value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ padding: ".5rem", width: "300px" }} />
                <button onClick={handleAddNote}>➕</button>
            </form>

            <ol>
                {notes.map((note) => (
                    <li key={note.id}>
                        {note.id === editID ? (
                            <>
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} autoFocus />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setEditID(null);
                                        setEditText("");
                                    }}
                                >✖</button>
                                <button type="button" onClick={handleUpdateNote}>✔</button>
                            </>
                        ) : (
                            <>
                                <div>{note.done === true ? <span style={{ color: "green" }}>{note.text}</span> : <span>{note.text}</span>}</div>

                                <div>
                                    <button type="button" onClick={() => handleDoneNote(note.id)}>
                                        ✔
                                    </button>
                                    <button type="button" onClick={() => handleStartEdit(note.id, note.text)}>
                                        ⚙
                                    </button>
                                    <button type="button" onClick={() => handleDeleteNote(note.id)}>
                                        🗑
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </>
    );
}
