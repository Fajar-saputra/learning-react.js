import { useState } from "react";
import { NotesContext } from "./NotesContext";
import { useContext } from "react";

export default function SubnoteForm() {
    const { notes, dispatch } = useContext(NotesContext);
    const [input, setInput] = useState("");

    function handleAddSubnote(e, noteId) {
        e.preventDefault();
        dispatch({
            type: "ADD_SUBNOTE",
            noteId: noteId,
            text: inputSubnote[noteId],
        });

        setInputSubnote({ ...inputSubnote, [noteId]: "" });
        console.log("berhasil ditambahkan : ", inputSubnote);
    }

    return (
        <form onSubmit={(e) => handleAddSubnote(e, note.id)}>
            <input type="text" placeholder="Enter task.." value={inputSubnote[note.id] || ""} onChange={(e) => setInputSubnote({ ...inputSubnote, [note.id]: e.target.value })} />
            <button type="submit">➕</button>
        </form>
    );
}
