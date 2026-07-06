import { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { getDashboardAnalytics } from "../../services/analyticsService";
import toast from "react-hot-toast";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const COLORS = [
    "#06b6d4",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
];

function Analytics() {

    const [stats, setStats] = useState(null);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {

        try {

            const res = await getDashboardAnalytics();

            setStats(res.data.stats);

        } catch (error) {

            console.log(error);

        }

    };

    if (!stats) {

        return (

            <AppLayout>

                <div className="flex h-screen items-center justify-center text-2xl font-semibold">

                    Loading Analytics...

                </div>

            </AppLayout>

        );

    }

    return (

        <AppLayout>

            <div className="p-8">

                <div className="mx-auto max-w-7xl">

                    {/* Hero */}

                    <div className="rounded-[35px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-10 text-white shadow-2xl">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-lg font-medium text-cyan-100">

                                    Mental Wellness Analytics

                                </p>

                                <h1 className="mt-3 text-3xl font-semibold">

                                    Your Emotional Journey

                                </h1>

                                <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50">

                                    Track your emotional wellbeing, discover
                                    patterns, celebrate your progress and build
                                    healthier habits every single day.

                                </p>

                            </div>

                            <div className="hidden h-36 w-36 items-center justify-center rounded-full bg-white/20 text-7xl backdrop-blur lg:flex">

                                💜

                            </div>

                        </div>

                    </div>

                    {/* Stats */}

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        <StatCard
                            title="Mood Logs"
                            value={stats.totalMoods}
                            icon="😊"
                            color="bg-cyan-100"
                        />

                        <StatCard
                            title="Journal Entries"
                            value={stats.journalCount}
                            icon="📖"
                            color="bg-green-100"
                        />

                        <StatCard
                            title="Current Streak"
                            value={`${stats.streak} 🔥`}
                            icon="🔥"
                            color="bg-orange-100"
                        />

                        <StatCard
                            title="Favorite Mood"
                            value={stats.mostFrequentMood}
                            icon="💜"
                            color="bg-violet-100"
                        />

                    </div>

                    {/* Charts */}

                    <div className="mt-10 grid gap-8 lg:grid-cols-2">

                        {/* Pie */}

                        <div className="rounded-3xl bg-white p-6 shadow-lg">

                            <h2 className="text-2xl font-bold">

                                🥧 Mood Distribution

                            </h2>

                            <p className="mb-6 mt-2 text-slate-500">

                                See how your emotions are distributed over time.

                            </p>

                            <ResponsiveContainer
                                width="100%"
                                height={320}
                            >

                                <PieChart>

                                    <Pie
                                        data={stats.moodDistribution}
                                        dataKey="count"
                                        nameKey="mood"
                                        outerRadius={110}
                                        innerRadius={55}
                                        paddingAngle={4}
                                    >

                                        {stats.moodDistribution.map((entry, index) => (

                                            <Cell
                                                key={index}
                                                fill={COLORS[index % COLORS.length]}
                                            />

                                        ))}

                                    </Pie>

                                    <Tooltip />

                                </PieChart>

                            </ResponsiveContainer>

                            <div className="mt-6 space-y-3">

                                {stats.moodDistribution.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                                    >

                                        <div className="flex items-center gap-3">

                                            <div
                                                className="h-4 w-4 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        COLORS[index % COLORS.length],
                                                }}
                                            />

                                            <p className="font-medium">

                                                {item.mood}

                                            </p>

                                        </div>

                                        <p className="font-semibold">

                                            {item.count}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Line Chart */}

                        <div className="rounded-[35px] bg-white p-8 shadow-xl">

                            <h2 className="text-2xl font-bold">

                                📈 Weekly Mood Logs

                            </h2>

                            <p className="mb-6 mt-2 text-slate-500">

                                Track your daily emotional activity.

                            </p>

                            <ResponsiveContainer
                                width="100%"
                                height={320}
                            >

                                <LineChart
                                    data={stats.weeklyMoodTrend}
                                >

                                    <CartesianGrid
                                        stroke="#e2e8f0"
                                        strokeDasharray="4 4"
                                    />

                                    <XAxis
                                        dataKey="createdAt"
                                        tickFormatter={(date) =>
                                            new Date(date).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "numeric",
                                                    month: "short",
                                                }
                                            )
                                        }
                                    />

                                    <YAxis hide />

                                    <Tooltip />

                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#06b6d4"
                                        strokeWidth={4}
                                    />

                                </LineChart>

                            </ResponsiveContainer>

                        </div>

                    </div>
                    {/* AI Wellness Summary */}

                    <div className="mt-10 rounded-[20px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-10 text-white shadow-2xl">

                        <h2 className="text-2xl font-semibold">
                            🤖 AI Wellness Summary
                        </h2>

                        <p className="mt-6 text-lg leading-9 text-cyan-50">

                            You've been consistently logging your emotions and
                            maintaining your wellness journey.

                            Keep journaling daily to build stronger emotional
                            awareness and healthier habits.

                        </p>

                    </div>

                </div>

            </div>

        </AppLayout>

    );

}

function StatCard({
    title,
    value,
    color,
    icon,
}) {

    return (

        <div className="group rounded-[26px] bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-2xl ${color}`}
            >
                {icon}
            </div>

            <p className="mt-3 text-sm font-medium text-slate-500">

                {title}

            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-800">

                {value}

            </h2>

        </div>

    );

}

export default Analytics;