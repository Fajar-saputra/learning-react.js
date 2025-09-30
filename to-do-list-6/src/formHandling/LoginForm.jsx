import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validasi real-time
  const validate = () => {
    let newErrors = {};

    if (username.trim().length < 3) {
      newErrors.username = "Username minimal 3 huruf";
    }

    if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    console.log(Object.keys(newErrors).length === 0);
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Saat submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`Login berhasil!\nUsername: ${username}\nPassword: ${password}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Login</h2>

      {/* Username */}
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            validate(); // validasi realtime
          }}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validate(); // validasi realtime
          }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;