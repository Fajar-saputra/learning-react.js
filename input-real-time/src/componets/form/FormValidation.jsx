import { useState } from "react";

export default function FormValidation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [umur, setUmur] = useState("");
    const [prodi, setProdi] = useState("");
    const [semester, setSemester] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi
        if (!name || !email || !umur || !prodi || !semester) {
            setError("Semua field wajib diisi!!");
            return;
        }

        if (!email.includes("@")) {
            setError("Email wajib mengandung @!!");
            return;
        }

        if (Number(umur) < 1 || Number(semester) < 1) {
            setError("Umur dan Semester harus lebih dari 0");
            return;
        }

        // Jika lolos semua validasi
        setError(""); // reset error
        console.log("Data dikirim :", { name, email, umur, prodi, semester });

        // Reset form
        setName("");
        setEmail("");
        setUmur("");
        setProdi("");
        setSemester("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form Validation</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="container-input">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name..." />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email..." />
                <input type="number" value={umur} onChange={(e) => setUmur(e.target.value)} placeholder="Enter your Age..." />
                <input type="text" value={prodi} onChange={(e) => setProdi(e.target.value)} placeholder="Enter your Prodi..." />
                <input type="number" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="Enter your Semester..." />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}
