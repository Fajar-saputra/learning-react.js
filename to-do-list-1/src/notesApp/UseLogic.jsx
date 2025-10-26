import { useState } from "react";
import { v4 } from "uuid";

const initialNotes = [
    {
        id: v4(),
        title: "Belajar React",
        isDone: false,
        subnote: [
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
        ],
    },
    {
        id: v4(),
        title: "Belajar Vue",
        isDone: false,
        subnote: [
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
        ],
    },
    {
        id: v4(),
        title: "Belajar Angular",
        isDone: false,
        subnote: [
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
        ],
    },
    {
        id: v4(),
        title: "Belajar PHP",
        isDone: false,
        subnote: [
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
            { id: v4(), title: "subnote level 2", isDone: false },
        ],
    },
];

export default function useLogic() {
    // notes
    const [notes, setNotes] = useState(initialNotes);
    const [note, setNote] = useState("");
    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState("");
    // subnote
    const [subnoteId, setSubnoteId] = useState(null);
    const [subnoteTitle, setSubnoteTitle] = useState("");

    // func note
    const handleAddNote = (e) => {
        e.preventDefault();
        if (note.trim() === "") {
            return alert("Tidak boleh kosong✖");
        }

        const newNote = { id: v4(), title: note.trim(), isDone: false, subnote: [] };

        setNotes((prev) => [...prev, newNote]);
        setNote("");
    };

    const handleDeleteNote = (noteId) => {
        setNotes((notes) => notes.filter((note) => note.id !== noteId));
    };

    const handleDoneNote = (noteId) => {
        setNotes((notes) => notes.map((note) => (note.id === noteId ? { ...note, isDone: !note.isDone } : note)));
    };

    const handleEditNote = (noteId, noteTitle) => {
        setNoteId(noteId);
        setNoteTitle(noteTitle);
    };

    const handleUpdatedNote = (e) => {
        e.preventDefault();
        setNotes((notes) => notes.map((note) => (note.id === noteId ? { ...note, title: noteTitle.trim() } : note)));
        setNoteId(null);
        setNoteTitle("");
    };

    // func sub note
    const handleDoneSubnote = (noteId, subnoteId) => {
        setNotes((notes) =>
            notes.map((note) =>
                note.id === noteId
                    ? {
                          ...note,
                          subnote: note.subnote.map((sub) => (sub.id === subnoteId ? { ...sub, isDone: !sub.isDone } : sub)),
                      }
                    : note
            )
        );
    };

    const handleDeleteSubnote = (noteId, subnoteId) => {
        setNotes((notes) => notes.map((note) => (note.id === noteId ? { ...note, subnote: note.subnote.filter((sub) => sub.id !== subnoteId) } : note)));
    };

    const handleEditSubnote = (subId, subTitle) => {
        setSubnoteId(subId);
        setSubnoteTitle(subTitle);
    };

    const handleUpdatedSubnote = (e, noteId) => {
        e.preventDefault();
        setNotes((notes) =>
            notes.map((note) =>
                note.id === noteId
                    ? {
                          ...note,
                          subnote: note.subnote.map((sub) => (sub.id === subnoteId ? { ...sub, title: subnoteTitle.trim() } : sub)),
                      }
                    : note
            )
        );
        setSubnoteId(null);
        setSubnoteTitle("");
    };

    return {
        // notes
        notes,
        setNotes,
        setNote,
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
    };
}
