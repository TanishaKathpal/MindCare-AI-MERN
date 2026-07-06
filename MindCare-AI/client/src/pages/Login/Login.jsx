
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiHeart, FiEye, FiEyeOff } from "react-icons/fi";
import { loginUser } from "../../services/authService";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

      navigate("/dashboard");

    }

  }, []);

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
      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-lg rounded-[32px] bg-white p-10 shadow-2xl">


        {/* RIGHT */}

        <div>

          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">

            <FiHeart size={28} />

          </div>
          <h2 className="mt-4 text-center text-xl font-semibold text-slate-800">
            MindCare AI
          </h2>

          <h1 className="mt-2 text-center text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-slate-500">

            Continue your wellness journey.

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

            {/* <div className="flex items-center justify-between"> */}

            {/* <label className="flex items-center gap-2 text-sm text-slate-600">

                <input type="checkbox" />

                Remember Me

              </label> */}

            {/* <button
                type="button"
                className="text-sm font-semibold text-cyan-600 hover:underline"
              >
                
                Forgot Password?

              </button>

            </div> */}

            {/* LOGIN */}

            <button
              className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >

              {loading ? "Logging In..." : "Sign In"}

            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-600">

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