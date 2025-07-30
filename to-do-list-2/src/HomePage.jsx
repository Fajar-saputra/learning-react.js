import UlangTodo from "./components/UlangTodo";

const HomePage = () => (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Selamat Datang di Aplikasi Multi-Halaman Kita!</h1>
        <p>Ini adalah halaman utama. Coba navigasi ke halaman lain.</p>
        <UlangTodo />
    </div>
);

export default HomePage