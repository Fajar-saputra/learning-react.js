import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";

export default function NotesForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatchContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        dispatch({
            type: "ADD_NOTE",
            text: text,
        });
        setText("");
    }
    return (
        <>
            <input type="text" placeholder="Note..." value={text} onChange={handleChange} style={{padding: ".5rem", width: "300px", borderRadius: ".3rem"}}/>
            <button type="button" onClick={handleClick} style={{padding: ".4rem 2rem", borderRadius: ".3rem", marginLeft: " 1rem", backgroundColor:"aqua"}}>
                ➕
            </button>
        </>
    );
}
