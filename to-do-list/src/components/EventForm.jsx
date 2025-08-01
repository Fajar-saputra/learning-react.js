import { useState } from "react";

export default function EventForm() {
    const [user, setInput] = useState("Terserah");

    const style = {
        backgroundColor: "white",
        outline: "none",
        border: "none",
        borderRadius: ".3rem",
        padding: ".7rem 1rem",
        boxShadow: "0 0 1rem rgba(0,0,0,.2)",
        cursor: "pointer",
    };

    return (
        <>
            <p>{user}</p>

            <input type="text" value={user} onChange={(e) => setInput(e.target.value)} placeholder="Enter your name..." style={style}/>
        </>
    );
}
