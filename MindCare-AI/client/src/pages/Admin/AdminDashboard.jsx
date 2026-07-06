import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  FiUsers,
  FiShield,
  FiSmile,
  FiBookOpen,
} from "react-icons/fi";

import {
  getAdminDashboard,
  getUsers,
  deleteUser,
  updateUserRole,
} from "../../services/adminService";
import AppLayout from "../../layouts/AppLayout";

function AdminDashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalMoodLogs: 0,
    totalJournals: 0,
  });

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchDashboard = async () => {

    try {

      const res = await getAdminDashboard();

      setStats(res.data.stats);

    } catch (error) {

      console.log(error);

    }

  };

  const fetchUsers = async () => {

    try {

      const res = await getUsers();

      setUsers(res.data.users);

    } catch (error) {

      console.log(error);

    }

  };
  const handleDelete = async (id) => {

    if (!window.confirm("Delete this user?")) return;

    try {

      await deleteUser(id);

      fetchUsers();
      fetchDashboard();

    } catch (error) {

      toast.error("Unable to delete user.");

    }

  };

  const handleRoleChange = async (id, currentRole) => {

    const newRole = currentRole === "admin" ? "user" : "admin";

    try {

      await updateUserRole(id, newRole);

      fetchUsers();
      fetchDashboard();

    } catch {

      toast.error("Unable to update role.");

    }

  };

  useEffect(() => {

    const loadData = async () => {

      setLoading(true);

      await Promise.all([
        fetchDashboard(),
        fetchUsers(),
      ]);

      setLoading(false);

    };

    loadData();

  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (

    <AppLayout>

      <div className="p-8">

        <div className="mx-auto max-w-7xl">

          {/* Hero */}

          <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-8 text-white shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
                  Admin Panel
                </p>

                <h1 className="mt-3 text-3xl font-semibold">
                  Admin Dashboard
                </h1>

                <p className="mt-5 max-w-2xl leading-8 text-cyan-50">
                  Manage users, monitor platform activity and
                  view complete MindCare AI statistics.
                </p>

              </div>

              <div className="hidden lg:flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl backdrop-blur">
                🛡️
              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Users"
              value={loading ? "--" : stats.totalUsers}
              icon={<FiUsers size={24} />}
              color="bg-cyan-100 text-cyan-700"
            />

            <StatCard
              title="Admins"
              value={loading ? "--" : stats.totalAdmins}
              icon={<FiShield size={24} />}
              color="bg-yellow-100 text-yellow-600"
            />

            <StatCard
              title="Mood Logs"
              value={loading ? "--" : stats.totalMoodLogs}
              icon={<FiSmile size={24} />}
              color="bg-green-100 text-green-600"
            />

            <StatCard
              title="Journals"
              value={loading ? "--" : stats.totalJournals}
              icon={<FiBookOpen size={24} />}
              color="bg-violet-100 text-violet-600"
            />

          </div>

          {/* Users */}

          <div className="mt-8 rounded-[30px] bg-white p-8 shadow-xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-bold text-slate-900">
                  Registered Users
                </h2>

                <p className="mt-2 text-slate-500">
                  Manage all registered users.
                </p>

              </div>

              <div className="rounded-full bg-cyan-100 px-4 py-2 font-semibold text-cyan-700">

                {users.length} Users

              </div>

            </div>

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-8 w-full rounded-2xl border border-slate-300 px-5 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b text-left text-slate-500">

                    <th className="pb-4">User</th>

                    <th className="pb-4">Email</th>

                    <th className="pb-4">Role</th>

                    <th className="pb-4">Joined</th>

                    <th className="pb-4 text-center">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredUsers.map((user) => (

                    <tr
                      key={user._id}
                      className="border-b transition hover:bg-slate-50"
                    >
                      <td className="py-5">

                        <div className="flex items-center gap-4">

                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold text-white">

                            {user.name.charAt(0).toUpperCase()}

                          </div>

                          <div>

                            <h3 className="font-semibold text-slate-800">

                              {user.name}

                            </h3>

                          </div>

                        </div>

                      </td>

                      <td className="py-5 text-slate-600">

                        {user.email}

                      </td>

                      <td className="py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-sm font-semibold

    ${user.role === "admin"
                              ? "bg-red-100 text-red-600"
                              : "bg-green-100 text-green-600"
                            }`}
                        >

                          {user.role}

                        </span>

                      </td>

                      <td className="py-5 text-slate-500">

                        {new Date(user.createdAt).toLocaleDateString()}

                      </td>

                      <td className="py-5">

                        <div className="flex justify-center gap-2">

                          <button
                            onClick={() => handleRoleChange(user._id, user.role)}
                            className="rounded-xl bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700"
                          >

                            {user.role === "admin"
                              ? "Make User"
                              : "Make Admin"}

                          </button>

                          {user.role !== "admin" && (

                            <button
                              onClick={() => handleDelete(user._id)}
                              className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-600"
                            >

                              Delete

                            </button>

                          )}

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </AppLayout>

  );

}

function StatCard({
  title,
  value,
  icon,
  color,
}) {

  return (

    <div className="rounded-[22px] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
      >

        {icon}

      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">

        {title}

      </p>

      <h2 className="mt-1 text-2xl font-bold text-slate-800">

        {value}

      </h2>

    </div>

  );

}

export default AdminDashboard;

