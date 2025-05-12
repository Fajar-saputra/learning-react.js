import { useState } from "react";

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h2>{isLoggedIn ? "Selamat datang, Fajar!" : "Silakan login dulu ya"}</h2>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}
