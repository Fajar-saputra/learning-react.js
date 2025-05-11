import { useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const styles = {
        backgroundColor: isDark ? "#1a1a1a" : "#f9f9f9",
        color: isDark ? "#ffffff" : "#000000",
        minHeight: "100px",
        with: "100px",
        padding: "2rem",
        transition: "all 0.3s ease",
        marginTop: "1rem"
    };

    return (
        <div style={styles}>
            <h2>{isDark ? "Dark Mode Aktif" : "Light Mode Aktif"}</h2>
            <button onClick={toggleTheme}>{isDark ? "Switch ke Light Mode" : "Switch ke Dark Mode"}</button>
        </div>
    );
}
