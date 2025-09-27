import { use, useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErros = [];

        if (username.trim()==="") {
            newErros.use
        }
    }

    return (
        <form action="">
            <h2>Login</h2>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Username..." value={username} onChange={(e = setUsername(e.target.value))} />
                {errors.username}
            </div>
        </form>
    );
}
