import { useState } from "react";

export default function FormComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });

    const [message, setMessage] = useState("");

    // Handler perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData, // salin isi lama
            [name]: value, // update sesuai input yang berubah
        });
    };

    // Handler submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name.trim() === "" || formData.email.trim() === "") {
            setMessage("❌ Nama dan Email wajib diisi!");
            return;
        }

        if (formData.password.length < 6) {
            setMessage("❌ Password minimal 6 karakter!");
            return;
        }

        setMessage(`✅ Registrasi sukses! Selamat datang ${formData.name}`);
        console.log("Data dikirim:", formData);

        setFormData({
            name: "",
            email: "",
            password: "",
            age: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Form Registrasi</h2>

            {/* Nama */}
            <div>
                <label>Nama:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>

            {/* Email */}
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            {/* Password */}
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>

            {/* Umur */}
            <div>
                <label>Umur:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </div>

            <button type="submit">Daftar</button>

            {/* Pesan hasil */}
            {message && <p>{message}</p>}
        </form>
    );
}
