import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ ADD
import "./Login.css";
import Input from "../../Compenents/Input/Input";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // ✅ ADD

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/login", form);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            const role = res.data.user.role;

            if (role === "admin") {
               navigate("/admin/dashboard");
            } else if (role === "owner") {
                navigate("/dashboard");
            } else {
                navigate("/");
            }
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="login-container">
            
            <div className="login-box">
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                    />

                    <button type="submit">Login</button>
                </form>

                <p>
                    Don’t have an account?
                    <span onClick={() => navigate("/signup")} style={{ cursor: "pointer", color: "#38bdf8", marginLeft: "5px" }}>
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;