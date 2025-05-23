import { useState } from "react";

export default function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <h3>Contoh</h3>
            <button onClick={handleToggle} >{isVisible ? "Hidden" : "Show"}</button>
            {isVisible && <p>Ini content yang disembunyikan!!</p>}
        </div>
    )
}