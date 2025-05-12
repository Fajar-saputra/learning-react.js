import { useState } from "react";

export default function InputName() {
    const [name, setName] = useState("");

    const HandleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h2>Hello, {name}</h2>
            <input type="text" placeholder="Enter your name..."  onChange={HandleChange}/>
        </div>
    )
}