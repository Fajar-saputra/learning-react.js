import { createContext, useContext } from "react";

// 1. Buat Context
const ThemeContext = createContext();

// 2. Komponen Provider
function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Komponen anak pakai useContext
function Button() {
  const theme = useContext(ThemeContext); // ambil data
  return <button>{theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}</button>;
}

export default function Basic() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}
