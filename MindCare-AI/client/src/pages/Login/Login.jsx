
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiHeart, FiEye, FiEyeOff } from "react-icons/fi";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-14 text-white relative">

          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/10"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-3">

              <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">

                <FiHeart className="text-3xl" />

              </div>

              <h1 className="text-4xl font-bold">

                MindCare AI

              </h1>

            </div>

            <h2 className="mt-12 text-5xl font-bold leading-tight">

              Welcome Back 👋

            </h2>

            <p className="mt-6 text-lg leading-8 text-cyan-100">

              Continue your mental wellness journey with
              AI-powered mood tracking, journaling,
              analytics and personalized insights.

            </p>

            <div className="mt-14 space-y-5">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>Track Daily Mood</p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>Private Journal</p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>AI Mental Insights</p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>Progress Analytics</p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-8 md:p-14">

          <h2 className="text-4xl font-bold text-slate-800">

            Login

          </h2>

          <p className="mt-2 text-slate-500">

            Login to continue your wellness journey.

          </p>

          <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

            {/* EMAIL */}

            <div>

              <label className="mb-2 block font-medium text-slate-700">

                Email Address

              </label>

              <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">

                <FiMail className="mr-3 text-slate-400" />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full outline-none"
                  />
              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="mb-2 block font-medium text-slate-700">

                Password

              </label>

              <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3 transition hover:border-cyan-500 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100">

                <FiLock className="mr-3 text-slate-400" />

                <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="text-slate-400" />
                ) : (
                  <FiEye className="text-slate-400" />
                )}
              </button>
              </div>

            </div>

            {/* REMEMBER */}

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-slate-600">

                <input type="checkbox" />

                Remember Me

              </label>

              <button
                type="button"
                className="text-sm font-semibold text-cyan-600 hover:underline"
              >

                Forgot Password?

              </button>

            </div>

            {/* LOGIN */}

            <button
              className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >

              {loading ? "Logging In..." : "Login →"}

            </button>

          </form>

          <p className="mt-8 text-center text-slate-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-cyan-600 hover:underline"
            >

              Create Account

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;