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

    return {
        notes,
        setNote,
    };
};
