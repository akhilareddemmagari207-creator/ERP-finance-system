// client/src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/auth/login", { username, password });
      setMessage(res.data.message);

      if (res.data.success) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/dashboard");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div style={{ margin: "80px" }}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      <h3>{message}</h3>
    </div>
  );
}

export default Login;
