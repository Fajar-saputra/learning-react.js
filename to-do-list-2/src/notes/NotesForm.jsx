import { useState } from "react";

export default function NotesForm({ onAddNote }) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        setText('')
        onAddNote(text)
    }
    return (
        <>
            <input type="text" placeholder="Enter note..." value={text} onChange={handleChange} style={{padding: ".6rem"}}/>
            <button onClick={handleClick}>Add</button>
        </>
    );
}
