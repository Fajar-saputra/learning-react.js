import { useContext, useState } from "react";
import { NotesContext } from "./NotesContext";

export default function FormNotes() {
    const { dispatch } = useContext(NotesContext);
    const [text, setText] = useState("");

    const handleAddNote = (e) => {
        dispatch({
            type: "ADD_NOTE",
            payload: { title: text }
        })

        setText("");
    }
    
    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={text} placeholder="New Notes..." onChange={(e) => setText(e.target.value)} />
            <button type="submit" onClick={handleAddNote}>
                ➕
            </button>
        </form>
    );
}
