
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiHeart,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",});

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
        }
    try {
      setLoading(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        };

    const res = await registerUser(payload);

      alert(res.data.message);

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-sky-600 to-cyan-500 text-white p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold mb-6">
            MindCare AI
          </h1>

          <h2 className="text-3xl font-semibold mb-4">
            Create Your Account ❤️
          </h2>

          <p className="text-lg leading-8 opacity-90">
            Start your journey towards better mental wellness.
            Track your mood, write journals and gain AI-powered insights.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            />

            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-sky-500">

                <FiLock className="text-gray-400 mr-3"/>

                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full outline-none"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FiEyeOff/> : <FiEye/>}
                </button>

                </div>


            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-sky-500">

                <FiLock className="text-gray-400 mr-3"/>

                <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full outline-none"
                />

                <button
                    type="button"
                    onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                    }
                >
                    {showConfirmPassword ? <FiEyeOff/> : <FiEye/>}
                </button>

                </div>

                <label className="flex items-center gap-2 text-sm text-gray-600">

                    <input required type="checkbox"/>

                    I agree to the Terms & Privacy Policy

                    </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-600 hover:bg-sky-700 transition text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sky-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;