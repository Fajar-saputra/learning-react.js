import { useState } from "react";

export default function LiveTextDisplay() {
    const [inputText, setInputText] = useState("");

    return (
        <>
            <h3>Lihat : { inputText}</h3>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Ketikan sesuatu..."/>
        </>
    )
}