import { useState } from "react";

export default function FormRegister() {
    const [message, setMessage] = useState("");
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...FormData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (FormData.name.trim() === "" || FormData.email.trim() === "") {
            setMessage("✖ Nama dan Email wajid diisi!");
            return;
        }

        if (FormData.password.length < 5 || FormData.address.trim().length < 5) {
            setMessage("✖ Password dan Address minimal 6 karakter");
            return;
        }

        setFormData({
            name: "",
            email: "",
            password: "",
            address: "",
        });

        setMessage("Register berhasil, selamat datang " + FormData.name);
    };

    return (
        <div>
            <h2>Form Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Name..." value={FormData.name} name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email..." value={FormData.email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password..." value={FormData.password} name="password" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Address..." value={FormData.address} name="address" onChange={handleChange} />
                </div>

                <button type="submit">Kirim</button>

                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
