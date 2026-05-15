import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Input from "../../Compenents/Input/Input";
const api = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${api}/signup`,
        form
      );

      // ✅ AUTO LOGIN
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      const role = res.data.user.role;

      if (role === "admin") {
        navigate("/dashboard");
      } else if (role === "owner") {
        navigate("/dashboard");
      } else {
        navigate("/header");
      }
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <Input
          label="Full Name"
          name="name"
          onChange={handleChange}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;