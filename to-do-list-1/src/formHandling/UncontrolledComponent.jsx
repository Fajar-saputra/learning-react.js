import { useRef } from "react"

export default function UncontrolledComponent() {
    const inputRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Hello " + inputRef.current.value)
    }

    return (
        <div>
            <h2>Ini controlled uncomponent</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"  ref={inputRef}/>
                <button type="submit">Krim</button>
            </form>
        </div>
    )
}