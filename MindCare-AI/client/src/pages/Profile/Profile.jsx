import { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import toast from "react-hot-toast";

import {
  FiTrendingUp,
  FiSmile,
  FiBookOpen,
  FiActivity,
} from "react-icons/fi";

import { getDashboardAnalytics } from "../../services/analyticsService";

import {
  getProfile,
  updateProfile,
} from "../../services/profileService";

function Profile() {

  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Female",
  });

  useEffect(() => {

    fetchProfile();
    fetchAnalytics();

  }, []);

  const fetchProfile = async () => {

    try {

      const res = await getProfile();

      setUser(res.data.user);

      setFormData({
        name: res.data.user.name || "",
        age: res.data.user.age || "",
        gender: res.data.user.gender || "Female",
      });

    } catch (err) {

      console.log(err);

    }

  };

  const fetchAnalytics = async () => {

    try {

      const res = await getDashboardAnalytics();

      setStats(res.data.stats);

    } catch (err) {

      console.log(err);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleUpdate = async () => {

    try {

      setLoading(true);

      await updateProfile(formData);

      toast.success("Profile Updated Successfully");

      fetchProfile();

    } catch (err) {

      toast.error("Unable to update profile.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <AppLayout>

      <div className="p-8">

        <div className="mx-auto max-w-6xl">

          {/* Hero */}

          <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-8 text-white shadow-2xl">

            <div className="flex items-center gap-6">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-5xl backdrop-blur">

                👤

              </div>

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">

                  Profile

                </p>

                <h1 className="mt-2 text-3xl font-semibold">

                  {user?.name}

                </h1>

                <p className="mt-2 text-cyan-100">

                  {user?.email}

                </p>

                <p className="mt-5 max-w-xl leading-8 text-cyan-50">

                  Manage your personal information and continue
                  building a healthier wellness journey.

                </p>

              </div>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Mood Streak"
              value={stats?.streak ?? 0}
              icon={<FiTrendingUp />}
              color="bg-orange-100 text-orange-600"
            />

            <StatCard
              title="Today's Mood"
              value={stats?.mostFrequentMood ?? "No Data"}
              icon={<FiSmile />}
              color="bg-green-100 text-green-600"
            />

            <StatCard
              title="Journal Entries"
              value={stats?.journalCount ?? 0}
              icon={<FiBookOpen />}
              color="bg-violet-100 text-violet-600"
            />

            <StatCard
              title="Wellness Score"
              value={`${stats?.wellnessScore ?? 0}%`}
              icon={<FiActivity />}
              color="bg-cyan-100 text-cyan-600"
            />

          </div>

          {/* Personal Information */}

          <div className="mt-10 rounded-[30px] bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-bold text-slate-800">

              Personal Information

            </h2>

            <p className="mt-2 text-slate-500">

              Update your personal information.

            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {/* Full Name */}

              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              {/* Email */}

              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full cursor-not-allowed rounded-2xl bg-slate-100 px-5 py-4 text-slate-500"
                />

              </div>

              {/* Age */}

              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              {/* Gender */}

              <div>

                <label className="mb-2 block font-medium text-slate-700">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                >

                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>

                </select>

              </div>

            </div>

            <button
              onClick={handleUpdate}
              disabled={loading}
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? "Saving..." : "Save Changes"}

            </button>

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
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${color}`}
      >

        {icon}

      </div>

      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">

        {title}

      </p>

      <h2 className="mt-1 text-2xl font-bold text-slate-800">

        {value}

      </h2>

    </div>

  );

}

export default Profile;