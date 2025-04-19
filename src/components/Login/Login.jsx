import { useState } from "react";

const Login = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post(`${baseURL}/login`, loginData);
      if (response.status !== 200) throw new Error("Login failed");

      onLogin(response.data.user);
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials or server error");
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login-header">Login:</h2>
      <input className="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button className="login-button" type="submit">Log In</button>
    </form>
  )
};

export default Login;
