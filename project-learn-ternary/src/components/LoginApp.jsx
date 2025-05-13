import { useState } from "react";

export default function LoginApp() {
  // State untuk menyimpan nilai input username
  const [username, setUsername] = useState("");
  // State untuk menyimpan nilai input password
  const [password, setPassword] = useState("");
  // State untuk menandakan apakah pengguna sudah berhasil login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State untuk menyimpan pesan error jika login gagal
  const [err, setErr] = useState("");

  // Fungsi yang dipanggil saat tombol submit pada form ditekan
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah perilaku default form submit (refresh halaman)
    // Kondisi untuk memeriksa apakah username dan password sesuai
    if (username === "ibrahim" && password === "1234") {
      setIsLoggedIn(true); // Set status login menjadi true jika berhasil
      setErr(""); // Reset pesan error
    } else {
      setErr("Username atau password salah!"); // Set pesan error jika login gagal
    }
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setPassword("")
        setUsername("")
    }

  return (
    <div>
      {/* Kondisi untuk menampilkan form login atau tampilan dashboard */}
      {!isLoggedIn ? (
        // Jika isLoggedIn false, tampilkan form login
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            // Mengupdate state username setiap kali nilai input berubah
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            // Mengupdate state password setiap kali nilai input berubah
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {/* Menampilkan pesan error jika ada */}
          {err && <p style={{ color: "red" }}>{err}</p>}
        </form>
      ) : (
        // Jika isLoggedIn true, tampilkan tampilan dashboard
        <div>
          <h1>Welcome {username}</h1>
                      <p>Ini tampilan dashboard sederhana</p>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}