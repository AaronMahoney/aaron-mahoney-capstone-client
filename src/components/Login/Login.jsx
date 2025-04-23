import './Login.scss';
import { useState } from "react";
import axios from 'axios';

const base_URL = import.meta.env.VITE_API_URL;

const Login = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.post(`${base_URL}/login`, loginData);
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
      <input 
      className="login-email" 
      type="email" 
      placeholder="Email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      required />
      <input 
      className="login-password" 
      type="password" 
      placeholder="Password" 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      required />
      <button 
      className="login-button" type="submit">Log In</button>
    </form>
  )
};

export default Login;
