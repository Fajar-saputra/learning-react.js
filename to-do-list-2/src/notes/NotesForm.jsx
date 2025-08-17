import { useState } from "react";

export default function NotesForm({handleAddNote, inputText, setInputText}) {  
    return (
        <>
            <input type="text" placeholder="Enter note..." value={inputText} onChange={(e) => setInputText(e.target.value)} style={{padding: ".6rem"}}/>
            <button onClick={handleAddNote}>Add</button>
        </>
    );
}
