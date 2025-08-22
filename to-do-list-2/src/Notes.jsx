import { useReducer, useState } from "react";
import { v4 } from "uuid";
import NoteForm from "./NoteForm";

function noteReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTES":
            return [...notes, { id: v4(), title: action.text, tasks: [] }];
        case "ADD_SUBNOTES":
            return notes.map((note) =>
                note.id === action.id
                    ? {
                          ...note,
                          tasks: [...note.tasks, { id: v4(), text: action.text, done: false }],
                      }
                    : note
            );

        default:
            return notes;
    }
}

const initialNotes = [
    {
        id: v4(),
        title: "Note 1",
        done: false,
        tasks: [
            {
                id: v4(),
                title: "subnote 2",
                done: false,
            },
            {
                id: v4(),
                title: "subnote 2",
                done: false,
            },
        ],
    },
];

export default function Notes() {
    const [notes, dispatch] = useReducer(noteReducer, initialNotes);

    const [inputNote, setInputNote] = useState("");
    const [inputSubnote, setInputSubnote] = useState("");

    function handleAddNotes(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTES",
            text: inputNote,
        });
    }

    function handleAddSubnotes(e, noteID) {
        e.preventDefault();
        dispatch({
            type: "ADD_SUBNOTES",
            text: inputSubnote[noteID],
            id: noteID,
        });

        setInputSubnote({ ...inputSubnote, [noteID]: "" });
    }

    function handleOnChangeSubnote(e, noteID) {
        setInputSubnote({...inputSubnote, [noteID] : e.target.value})
    }

    return (
        <div>
            <form action="" onSubmit={handleAddNotes}>
                <input type="text" placeholder="Enter Note..." value={inputNote} onChange={(e) => setInputNote(e.target.value)} autoFocus />
                <button type="submit">➕</button>
            </form>

            <ol>
                {notes.map((note) => (
                    <li key={note.id}>
                        <span>{note.title}</span>
                        <NoteForm onSubmit={(e) => handleAddSubnotes(e, note.id)} input={inputSubnote[note.id] || ""} onChange={(e) => handleOnChangeSubnote(e, note.id)}/>
                        <ul>
                            {note.tasks.map((task) => (
                                <li key={task.id}>
                                    <span>{task.title}</span>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    );
}
