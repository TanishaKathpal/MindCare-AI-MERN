import AppLayout from "../../layouts/AppLayout";
import toast from "react-hot-toast";
import { deleteAccount } from "../../services/profileService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../services/profileService";

import {
    FiUser,
    FiBell,
    FiMoon,
    FiLock,
    FiInfo,
    FiChevronRight,
    FiTrash2,
} from "react-icons/fi";



function Settings() {

    const navigate = useNavigate();
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [showAppearance, setShowAppearance] = useState(false);
    const [theme, setTheme] = useState("Light");
    const [showAbout, setShowAbout] = useState(false);

    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
    });


    const handleDeleteAccount = async () => {

        if (
            !window.confirm(
                "Delete your account permanently?"
            )
        )
            return;

        try {

            await deleteAccount();

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            toast.success("Account Deleted");

            navigate("/");

        } catch {

            toast.error("Unable to delete account");

        }

    };
    const enableNotifications = async () => {

        if (!("Notification" in window)) {

            toast.error("Browser does not support notifications.");
            return;

        }

        if (Notification.permission === "granted") {

            toast.success("Notifications already enabled.");
            return;

        }

        const permission = await Notification.requestPermission();

        if (permission === "granted") {

            toast.success("Notifications Enabled 🎉");

            new Notification("MindCare AI", {
                body: "Daily wellness reminders are now enabled ❤️",
                icon: "/vite.svg", // apna logo ho to uska path de dena
            });

        } else {

            toast.error("Notification permission denied.");

        }

    };

    const handlePasswordChange = async () => {

        try {

            await changePassword(passwords);

            toast.success("Password Updated Successfully");

            setPasswords({
                currentPassword: "",
                newPassword: "",
            });

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Unable to update password"
            );

        }

    };

    return (
        <AppLayout>
            <div className="p-8">

                <div className="mx-auto max-w-5xl">

                    {/* Hero */}

                    <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-8 text-white shadow-2xl">

                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
                            Settings
                        </p>

                        <h1 className="mt-3 text-3xl font-semibold">
                            Manage Your Preferences
                        </h1>

                        <p className="mt-5 max-w-2xl leading-8 text-cyan-50">
                            Customize your account, notifications and privacy
                            settings.
                        </p>

                    </div>

                    {/* Settings Card */}

                    <div className="mt-8 rounded-[30px] bg-white p-8 shadow-xl">

                        <SettingItem
                            icon={<FiUser />}
                            title="Account"
                            subtitle="Manage your personal information"
                            onClick={() => navigate("/profile")}
                        />
                        <hr className="my-2 border-slate-200" />
                        <SettingItem
                            icon={<FiBell />}
                            title="Notifications"
                            subtitle="Enable browser notifications"
                            onClick={enableNotifications}
                        />
                        <hr className="my-2 border-slate-200" />

                        <SettingItem
                            icon={<FiMoon />}
                            title="Appearance"
                            subtitle="Theme preferences"
                            onClick={() => setShowAppearance(!showAppearance)}
                        />
                        {showAppearance && (

                            <div className="mt-5 rounded-2xl bg-slate-50 p-5">

                                <p className="mb-4 font-semibold text-slate-700">
                                    Choose Theme
                                </p>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() => {
                                            setTheme("Light");
                                            toast.success("Light Theme Selected");
                                        }}
                                        className={`rounded-xl px-5 py-3 ${theme === "Light"
                                                ? "bg-cyan-600 text-white"
                                                : "bg-white border"
                                            }`}
                                    >
                                        ☀️ Light
                                    </button>

                                    <button
                                        onClick={() => {
                                            setTheme("Dark");
                                            toast("Dark Mode Coming Soon 🌙");
                                        }}
                                        className={`rounded-xl px-5 py-3 ${theme === "Dark"
                                                ? "bg-slate-900 text-white"
                                                : "bg-white border"
                                            }`}
                                    >
                                        🌙 Dark
                                    </button>

                                </div>

                            </div>

                        )}


                        <SettingItem
                            icon={<FiLock />}
                            title="Privacy"
                            subtitle="Password & Security"
                            onClick={() => setShowPasswordForm(!showPasswordForm)}
                        />
                        <hr className="my-2 border-slate-200" />

                        {showPasswordForm && (

                            <div className="mt-5 space-y-4">

                                <input
                                    type="password"
                                    placeholder="Current Password"
                                    value={passwords.currentPassword}
                                    onChange={(e) =>
                                        setPasswords({
                                            ...passwords,
                                            currentPassword: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border px-4 py-3"
                                />

                                <input
                                    type="password"
                                    placeholder="New Password"
                                    value={passwords.newPassword}
                                    onChange={(e) =>
                                        setPasswords({
                                            ...passwords,
                                            newPassword: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-xl border px-4 py-3"
                                />

                                <button
                                    onClick={handlePasswordChange}
                                    className="rounded-xl bg-cyan-600 px-5 py-3 text-white"
                                >
                                    Update Password
                                </button>

                            </div>

                        )}




                        <SettingItem
                            icon={<FiInfo />}
                            title="About MindCare AI"
                            subtitle="Version 1.0"
                            onClick={() => setShowAbout(!showAbout)}
                        />

                        {showAbout && (

                            <div className="mt-5 rounded-2xl bg-cyan-50 p-6">

                                <h3 className="text-xl font-bold text-slate-800">
                                    MindCare AI
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">

                                    MindCare AI is a Mental Wellness Platform developed
                                    using the MERN Stack. It enables users to track daily
                                    moods, maintain personal journals, receive AI-powered
                                    wellness insights, visualize emotional trends through
                                    analytics, and manage their profile securely.

                                </p>

                                <div className="mt-5 space-y-2 text-slate-700">

                                    <p><strong>Version:</strong> 1.0.0</p>

                                    <p><strong>Frontend:</strong> React + Tailwind CSS</p>

                                    <p><strong>Backend:</strong> Node.js + Express.js</p>

                                    <p><strong>Database:</strong> MongoDB</p>

                                    <p><strong>Authentication:</strong> JWT</p>

                                    <p><strong>Developed By:</strong> Team MindCare AI</p>

                                </div>

                            </div>

                        )}
                    </div>

                    {/* Danger Zone */}

                    <div className="mt-8 rounded-[30px] border border-red-200 bg-red-50 p-8 shadow-sm">

                        <h2 className="text-xl font-bold text-red-600">
                            Danger Zone
                        </h2>

                        <p className="mt-2 text-slate-600">
                            Permanently remove your account and all associated
                            data.
                        </p>

                        <button
                            onClick={handleDeleteAccount}
                            className="mt-4 flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-white"
                        >

                            <FiTrash2 />

                            Delete Account

                        </button>

                    </div>

                </div>

            </div>
        </AppLayout>
    );
}

function SettingItem({
    icon,
    title,
    subtitle,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className="flex w-full items-center justify-between rounded-2xl p-5 transition duration-200 hover:bg-cyan-50"
        >
            <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-100 p-3 text-cyan-700">
                    {icon}
                </div>

                <div className="text-left">
                    <h3 className="font-semibold text-slate-800">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-500">
                        {subtitle}
                    </p>
                </div>

            </div>

            <FiChevronRight className="text-slate-400" />
        </button>
    );
}
export default Settings;