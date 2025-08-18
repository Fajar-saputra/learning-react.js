import { useReducer, useState } from "react";

let id = 0;
const InitialNotes = [
    { id: id++, text: "Belajar Jadi Pintar 1", done: false },
    { id: id++, text: "Belajar Jadi Pintar 2", done: false },
    { id: id++, text: "Belajar Jadi Pintar 3", done: false },
    { id: id++, text: "Belajar Jadi Pintar 4", done: false },
    { id: id++, text: "Belajar Jadi Pintar 5", done: false },
    { id: id++, text: "Belajar Jadi Pintar 6", done: false },
];

function funcReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTES":
            return [...notes, { id: id++, text: action.text, done: false }];
        case "DONE_NOTES":
            return notes.map((note) => (note.id === action.id ? { ...note, done: !note.done } : note));
        case "DELETE_NOTES":
            return notes.filter((note) => (note.id !== action.id ));
        default:
            return notes;
    }
}

export default function TodoReducer() {
    const [notes, dispatch] = useReducer(funcReducer, InitialNotes);
    const [input, setInput] = useState("");

    function handleAddNote(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTES",
            text: input,
        });

        setInput("");
    }

    function handleIsDone(id) {
        dispatch({
            type: "DONE_NOTES",
            id
        });
    }

    function handleDeleteNote(id) {
        dispatch({
            type: "DELETE_NOTES",
            id
        })
    }

    return (
        <div>
            <h1>INI REDUCER</h1>
            <form action="" onSubmit={handleAddNote}>
                <input type="text" placeholder="New note..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">➕</button>
            </form>
            <ol>
                {notes.map((note) => (
                    <li key={note.id}>
                        {note.done === true ? (
                            <span style={{ color: "hotpink" }}>{note.text}</span>
                        ) : (
                            <span>
                                {note.text}
                            </span>
                        )}
                        <button type="button" onClick={() => handleIsDone(note.id)}>✔</button>
                        <button type="button" onClick={() => handleDeleteNote(note.id)}>🗑</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
