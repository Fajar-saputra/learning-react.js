import { useRef, useState } from "react"

export default function ControlledComponent() {
    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Hello " + name)
        // useState("");
    }

    return (
        <div>
            <h2>Ini controlled component</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">Krim</button>
            </form>
        </div>
    )
}