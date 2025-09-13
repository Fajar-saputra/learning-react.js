import { useState } from "react";
import { NotesContext } from "./NotesContext";
import { useContext } from "react";


export default function NoteForm() {
    const { notes, dispatch } = useContext(NotesContext);
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            text: input
        });
        
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New note..." value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type="submit">➕</button>
        </form>
    );
}

