import { useState } from "react";

export default function Isback() {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show)
    }

    return (
        <div>
            <button onClick={handleToggle}>{show ? "Hide" : "Show"}</button>
            {show ? <p>Hallo ibrahim</p> : ""}
        </div>
    );
}
