import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSmile,
  FiBookOpen,
  FiCpu,
  FiBarChart2,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronRight,
  FiHeart,
  FiShield,
} from "react-icons/fi";

function Sidebar({ user }) {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { label: "Dashboard", path: "/dashboard", icon: FiHome },
    { label: "Mood Tracker", path: "/mood", icon: FiSmile },
    { label: "Journal", path: "/journal", icon: FiBookOpen },
    { label: "AI Coach", path: "/ai", icon: FiCpu },
    { label: "Analytics", path: "/analytics", icon: FiBarChart2 },
    { label: "Profile", path: "/profile", icon: FiUser },
    { label: "Settings", path: "/settings", icon: FiSettings },
  ];

  if (user?.role === "admin") {
    sidebarItems.push({
      label: "Admin",
      path: "/admin",
      icon: FiShield,
    });
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6 text-white lg:min-h-screen lg:w-72">

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
          <FiHeart className="text-xl" />
        </div>

        <div>
          <p className="text-lg font-semibold">MindCare AI</p>
          <p className="text-sm text-slate-400">
            Mental Wellness Hub
          </p>
        </div>
      </div>

      <nav className="mt-8 space-y-2">

        {sidebarItems.map(({ label, path, icon: Icon }) => {

          const active = location.pathname === path;

          return (
            <button
              key={label}
              onClick={() => navigate(path)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition

              ${
                active
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >

              <span className="flex items-center gap-3">

                <Icon />

                {label}

              </span>

              {active && <FiChevronRight />}

            </button>
          );
        })}

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-300 transition hover:bg-red-500 hover:text-white"
        >
          <FiLogOut />
          Logout
        </button>

      </nav>
    </aside>
  );
}

export default Sidebar;