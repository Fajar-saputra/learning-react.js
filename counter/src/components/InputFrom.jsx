import { useState } from "react";

export default function InputFrom() {
    const [name, setName] = useState("");

    return (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <input
                type="text"
                value={name}
                className="inputAja"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name!!!"

            />

            <h2>Hello, {name || "siapa?"}</h2>
        </div>
    );
}
