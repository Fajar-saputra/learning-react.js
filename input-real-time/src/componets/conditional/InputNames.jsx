import { useState } from "react"

export default function InputNames() {

    const [ada, setAda] = useState(false)


    return (
        <div>
            <input type="text" placeholder="Enter your name" onChange={(e) => setAda(e.target.value)} />
            <p style={{ color: ada.length > 0 ? "green" : "red" }}>{ada.length > 0? "✅" : "Nama tidak boleh kosong"}</p>
        </div>
    )
}