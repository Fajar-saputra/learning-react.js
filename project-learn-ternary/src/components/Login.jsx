import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "123") {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Username atau password salah!");
        }
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
    };

    const cardStyle = {
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        backgroundColor: "white",
        minWidth: "300px",
    };

    const inputStyle = {
        width: "100%",
        padding: "0.5rem",
        margin: "0.5rem 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
    };

    const buttonStyle = {
        width: "100%",
        padding: "0.5rem",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "0.5rem",
    };

    const errorStyle = {
        color: "red",
        marginTop: "0.5rem",
        fontSize: "0.9rem",
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                {!isLoggedIn ? (
                    <form onSubmit={handleLogin}>
                        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Login</h2>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                        <button type="submit" style={buttonStyle}>
                            Login
                        </button>
                        {error && <p style={errorStyle}>{error}</p>}
                    </form>
                ) : (
                    <div>
                        <h2>Selamat Datang, {username}!</h2>
                        <p>Ini adalah tampilan dashboard sederhana.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
