import { useState } from "react";

export default function RegisterForm() {
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: "",
        alamat: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.nama.trim() === "" || formData.email.trim() === "") {
            setMessage("✖ Nama dan Email wajid diisi!!");
            return;
        }

        setMessage(`Register berhasil, selamat datang ${formData.nama}`);

        setFormData({
            nama: "",
            email: "",
            password: "",
            alamat: "",
        });

        console.log(message, formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Form Register</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" value={formData.nama} placeholder="Name..." name="nama" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" value={formData.email} placeholder="Email..." name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" value={formData.password} placeholder="Password..." name="password" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Alamat: </label>
                    <input type="text" value={formData.alamat} placeholder="Alamat..." name="alamat" onChange={handleChange} />
                </div>
                <button type="submit">Kirim</button>
                {message ? <p>{message}</p> : null}
            </form>
        </div>
    );
}
