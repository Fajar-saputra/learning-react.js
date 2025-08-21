import { useReducer, useState } from "react";
import { v4 } from "uuid";

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
        title: "Testing dulu",
        tasks: [
            {
                id: v4(),
                text: "Testing sub notes",
                done: false,
            },
        ],
    },
    {
        id: v4(),
        title: "Testing dulu",
        tasks: [
            {
                id: v4(),
                text: "Testing sub notes",
                done: false,
            },
        ],
    },
    {
        id: v4(),
        title: "Testing dulu",
        tasks: [
            {
                id: v4(),
                text: "Testing sub notes",
                done: false,
            },
        ],
    },
    {
        id: v4(),
        title: "Testing dulu",
        tasks: [
            {
                id: v4(),
                text: "Testing sub notes",
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
            text: inputSubnote,
            id: noteID,
        });
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
                        <form onSubmit={(e) => handleAddSubnotes(e, note.id)}>
                            <input type="text" placeholder="Enter subnote" value={inputSubnote[note.id] || ""} onChange={(e) => setInputSubnote({...inputSubnote, [note.id]: e.target.value})} />
                            <button type="submit">➕</button>
                        </form>
                        <ul>
                            {note.tasks.map((task) => (
                                <li key={task.id}>{task.text}</li>
                            ))}
                        </ul>
                    </li> 
                ))}
            </ol>
        </div>
    );
}
