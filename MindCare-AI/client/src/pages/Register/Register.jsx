
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
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
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

      navigate("/dashboard");

    }

  }, [navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      toast.error("Please fill all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
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
      toast.error(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-2xl">



        {/* Right Side */}
        <div>

          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">

            <FiHeart size={28} />

          </div>

          <h2 className="text-center text-xl font-semibold text-slate-800">

            MindCare AI

          </h2>

          <h1 className="mt-2 text-center text-3xl font-bold text-slate-900">

            Join MindCare AI
          </h1>

          <p className="mt-2 text-center text-slate-500">

            Start your wellness journey today.


          </p>



          <form onSubmit={handleSubmit} className="space-y-5 mt-10">
            <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">

              <FiUser className="mr-3 text-slate-400" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none"
              />

            </div>
            <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">

              <FiMail className="mr-3 text-slate-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none"
              />

            </div>

            <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">

              <FiLock className="mr-3 text-slate-400" />
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
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>


            </div>








            <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">

              <FiLock className="mr-3 text-slate-400" />

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
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </button>

            </div>


            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-cyan-600 hover:underline"
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