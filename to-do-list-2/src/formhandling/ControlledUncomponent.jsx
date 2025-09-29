import { useRef } from "react"

export default function ControlledUncomponent() {
    const username = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Haii, " + username.current.value)
    }


    return (
        <div>
            <h2>INI CONTROLLED COMPONENT</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Show Alert" ref={username}/>
                <button type="submit">Show Alert</button>
            </form>
        </div>
    )
}