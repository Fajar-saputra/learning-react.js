import { useState } from "react";

export default function FormEmail() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email : ", { email });
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>Email anda </h2>
                <input type="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Kirim</button>
            </form>
        </div>
    );
}
