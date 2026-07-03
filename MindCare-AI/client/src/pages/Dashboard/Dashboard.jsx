import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/userService";

import {
  FiHome,
  FiSmile,
  FiBookOpen,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBell,
  FiPlus,
  FiBarChart2,
  FiChevronRight,
  FiActivity,
} from 'react-icons/fi';
import { FiHeart } from "react-icons/fi";

const sidebarItems = [
  { label: 'Dashboard', icon: FiHome, active: true },
  { label: 'Mood Tracker', icon: FiSmile },
  { label: 'Journal', icon: FiBookOpen },
  { label: 'Profile', icon: FiUser },
  { label: 'Settings', icon: FiSettings },
  { label: 'Logout', icon: FiLogOut },
];

const recentEntries = [
  {
    title: 'Morning Reflection',
    time: '8:20 AM',
    text: 'Felt grounded and clear after a short walk.',
  },
  {
    title: 'Evening Reset',
    time: '9:45 PM',
    text: 'Noticed a calmer mood after journaling and stretching.',
  },
  {
    title: 'Midday Check-in',
    time: '1:10 PM',
    text: 'A little tired, but still productive and hopeful.',
  },
];

const quickActions = [
  { label: 'Add Mood', icon: FiSmile },
  { label: 'New Journal', icon: FiPlus },
  { label: 'View Analytics', icon: FiBarChart2 },
];


function Dashboard() {
     const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {

        const fetchUser = async () => {

        try {

            const data = await getCurrentUser();

            setUser(data);

        } catch (error) {

            console.log(error);

        }

        };

        fetchUser();

    }, []);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <aside className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6 text-white lg:min-h-screen lg:w-72">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
              <FiHeart  className="text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold">MindCare AI</p>
              <p className="text-sm text-slate-400">Mental wellness hub</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
           
              {sidebarItems.map(({ label, icon: Icon, active }) => (
                <button
                    key={label}
                    onClick={label === "Logout" ? handleLogout : undefined}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                    active
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                >
                <span className="flex items-center gap-3">
                  <Icon className="text-base" />
                  {label}
                </span>
                {active && <FiChevronRight className="text-sm" />}
              </button>
            ))}
          </nav>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <p className="text-sm font-medium text-cyan-200">Daily Insight</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Your mood trend is improving steadily. Keep your routine going today.
            </p>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600">
                Overview
              </p>
              <h1 className="mt-1 text-2xl font-semibold text-slate-900">MindCare Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-cyan-400 hover:text-cyan-600">
                <FiBell className="text-lg" />
              </button>
              <div className="flex items-center gap-3 rounded-full bg-slate-100 px-3 py-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 font-semibold text-white">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{user?.name || "User"}</p>
                  <p className="text-xs text-slate-500">Premium Member</p>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-6 rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-6 text-white shadow-xl shadow-cyan-500/20 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-100">Welcome back</p>
                <h2 className="mt-2 text-3xl font-semibold">Good Evening, {user?.name} 👋</h2>
                <p className="mt-3 max-w-2xl text-sm text-cyan-50/90 sm:text-base">
                  You’re doing great. A calm evening and a few mindful habits can make tomorrow feel lighter.
                </p>
              </div>
              <div className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur">
                <p className="text-sm text-cyan-50">Today’s focus</p>
                <p className="mt-1 text-lg font-semibold">Rest + Reflection</p>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Today&apos;s Mood</p>
                <div className="rounded-2xl bg-cyan-100 p-2 text-cyan-600">
                  <FiSmile className="text-lg" />
                </div>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">😊 Calm</p>
              <p className="mt-2 text-sm text-slate-500">Balanced and focused</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Journal Entries</p>
                <div className="rounded-2xl bg-teal-100 p-2 text-teal-600">
                  <FiBookOpen className="text-lg" />
                </div>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">12</p>
              <p className="mt-2 text-sm text-slate-500">This month so far</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Mood Streak</p>
                <div className="rounded-2xl bg-amber-100 p-2 text-amber-600">
                  <FiActivity className="text-lg" />
                </div>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">7 Days</p>
              <p className="mt-2 text-sm text-slate-500">Consistency is improving</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">Wellness Score</p>
                <div className="rounded-2xl bg-blue-100 p-2 text-blue-600">
                  <FiBarChart2 className="text-lg" />
                </div>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">92%</p>
              <p className="mt-2 text-sm text-slate-500">Excellent balance</p>
            </div>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Weekly Mood Overview</h3>
                  <p className="text-sm text-slate-500">A calm snapshot of your week</p>
                </div>
                <button className="rounded-full bg-cyan-50 px-3 py-2 text-sm font-medium text-cyan-700">
                  Last 7 Days
                </button>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50 p-4 sm:p-6">
                <div className="flex h-56 items-end justify-between gap-2 rounded-2xl border border-dashed border-slate-200 bg-gradient-to-t from-cyan-50 to-white p-4">
                  {[45, 68, 58, 82, 72, 88, 76].map((height, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center gap-2">
                      <div className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-600 to-teal-400" style={{ height: `${height}%` }} />
                      <span className="text-xs font-medium text-slate-500">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  Chart placeholder for your upcoming weekly mood insights.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Recent Journal Entries</h3>
                  <button className="text-sm font-medium text-cyan-600">View all</button>
                </div>

                <div className="mt-4 space-y-3">
                  {recentEntries.map((entry) => (
                    <div key={entry.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{entry.title}</p>
                          <p className="mt-1 text-sm text-slate-600">{entry.text}</p>
                        </div>
                        <span className="text-xs font-medium text-slate-400">{entry.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">Quick Actions</h3>
                <div className="mt-4 space-y-3">
                  {quickActions.map(({ label, icon: Icon }) => (
                    <button
                      key={label}
                      className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      <span className="flex items-center gap-3">
                        <span className="rounded-xl bg-white p-2 shadow-sm">
                          <Icon className="text-base" />
                        </span>
                        {label}
                      </span>
                      <FiChevronRight className="text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}


export default Dashboard;