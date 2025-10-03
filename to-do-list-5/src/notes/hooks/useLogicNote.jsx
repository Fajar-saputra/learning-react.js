import { useState } from "react";

let id = 0;

const initialNotes = [
    { id: id++, title: "belajar react", isComplete: false },
    { id: id++, title: "belajar php", isComplete: false },
    { id: id++, title: "belajar C", isComplete: false },
    { id: id++, title: "belajar python", isComplete: false },
    { id: id++, title: "belajar numpy", isComplete: false },
];

const useLogicNote = () => {
    const [notes, setNote] = useState(initialNotes);
    const [editNote, setEditNote] = useState("");
    const [editNoteId, setEditNoteId] = useState(null);
    const [text, setText] = useState("");

    const handleAddNote = (e) => {
        e.preventDefault();
        setNote(...prev => [...prev, { id: id++, title: text.trim(), isComplete: false }]);
    };

    return {
        notes,
        setNote,
        text,
        setText,
        handleAddNote,
    };
};

export default useLogicNote;
