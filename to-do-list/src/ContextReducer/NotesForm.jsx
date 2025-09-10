import { useContext, useState } from "react"
import { NotesDispatchContext } from "./NotesContext";

export default function NotesForm() {
    const [text, setText] = useState(" ");
    const dispatch = useContext(NotesDispatchContext);

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        dispatch({
            type: 'ADD_NOTE',
            text: text
        })
        setText(" ");
    }
    return (
        <>
        <input type="text" placeholder="Note..." value={text} onChange={handleChange}/>
        <button type="button" onClick={handleClick}>➕</button>
        </>
    )
}