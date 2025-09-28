import {  useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (username.trim() !== "") {
            newErrors.username = "Tidak boleh kosong!";
        }
        if (username.trim().length < 5) {
            newErrors.username = "Minimal 5 karakter!";
        }
        if (password.trim() !== "") {
            newErrors.password = "Tidak boleh kosong!";
        }
        if (password.trim().length < 5) {
            newErrors.password = "Minimal 5 karakter!";
        }


        return newErrors;
    }

    return (
        <form action="">
            <h2>Login</h2>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <p style={{color: "red"}}></p>}
            </div>
        </form>
    );
}
