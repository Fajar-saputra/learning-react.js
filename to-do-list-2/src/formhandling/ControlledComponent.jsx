import { useState } from "react"

export default function ControlledComponent() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Hello, "+ name)
    }
    return (
        <div>
            <h2>INI CONTROLLED COMPONENT</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..."/>
                <button type="submit">Show Alert</button>
            </form>
        </div>
    )
}