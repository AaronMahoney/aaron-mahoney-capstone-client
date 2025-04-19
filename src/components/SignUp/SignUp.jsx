import { useState } from "react";

const SignUp = ({ onSignUp }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const signupData = { name, email, password };

        try {
            const response = await axios.post(`${baseURL}/signup`, signupData);
            if (response.status !== 201) throw new Error("Signup failed");

            onSignUp(response.data.user);
        } catch (error) {
            console.error("Signup error:", error);
            alert("Could not create account.");
        }
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h2 className="signup-header">Sign Up:</h2>
            <input
                className="signup-name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="signup-email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className="signup-password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className="signup-button" type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
