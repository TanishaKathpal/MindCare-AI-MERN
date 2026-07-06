import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiHeart,
  FiShield,
  FiTrendingUp,
  FiBookOpen,
  FiSmile,
  FiUser,
  FiStar,
  FiCpu,
} from "react-icons/fi";


const features = [
  {
    title: "Mood Tracker",
    description:
      "Track your daily emotions with beautiful mood cards and build healthy emotional awareness over time.",
    icon: FiSmile,
  },
  {
    title: "Smart Journal",
    description:
      "Write your thoughts, reflections, and daily experiences in a secure personal journal.",
    icon: FiBookOpen,
  },
  {
    title: "AI Wellness Coach",
    description:
      "Receive personalized wellness insights and supportive guidance powered by AI based on your mood and journal.",
    icon: FiHeart,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize mood trends, journal activity, streaks, and emotional patterns with interactive analytics.",
    icon: FiTrendingUp,
  },
  {
    title: "Personal Profile",
    description:
      "Manage your profile, monitor your wellness journey, and keep your personal information up to date.",
    icon: FiUser,
  },
  {
    title: "Secure Authentication",
    description:
      "Your wellness data stays private with secure login, protected routes, and encrypted authentication.",
    icon: FiShield,
  },
];

const steps = [
  "Create Account",
  "Track Mood",
  "AI Wellness Analysis",
  "View Analytics",
];


const faqs = [
  {
    question: "Is my personal data and journal secure?",
    answer:
      "Yes. Your account is protected through secure authentication, and your mood logs and journal entries are stored privately. Only you can access your personal wellness data.",
  },
  {
    question: "How does the AI Wellness Coach work?",
    answer:
      "The AI Wellness Coach analyzes your daily mood and journal entry to provide supportive insights, practical wellness suggestions, and motivational guidance. It is designed to encourage self-reflection and should not replace professional medical advice.",
  },
  {
    question: "Can I track my emotional progress over time?",
    answer:
      "Absolutely. MindCare AI provides an Analytics Dashboard where you can view mood trends, journal activity, emotional patterns, and consistency through interactive charts and insights.",
  },

  {
    question: "Can I talk to a professional counsellor through MindCare AI?",
    answer:
      "Not yet. Counsellor support is planned as a future enhancement of MindCare AI. Upcoming versions aim to include counsellor discovery, appointment booking, and secure chat or video consultation features to provide professional mental health support.",
  }
];
function Landing() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-500/20">
              <FiHeart className="text-lg" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">MindCare AI</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-cyan-600">Features</a>
            <a href="#about" className="transition hover:text-cyan-600">About</a>
            <a href="#contact" className="transition hover:text-cyan-600">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 sm:block"
            >
              Login
            </button>
            <button
              onClick={() => {

                if (token) {

                  navigate("/dashboard");

                } else {

                  navigate("/register");

                }

              }}
              className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-2 text-sm font-medium text-cyan-700">
              <FiStar />
              Trusted by modern wellness teams
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI-Powered Mental Wellness Platform
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Track your mood, write personal journals, receive AI-powered wellness insights,
              visualize emotional trends, and build healthier habits—all in one secure platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {

                  if (token) {

                    navigate("/dashboard");

                  } else {

                    navigate("/register");

                  }

                }}
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700"
              >
                Get Started
                <FiArrowRight className="ml-2" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-teal-50 p-8 shadow-xl shadow-slate-200/60">
              <div className="rounded-[1.5rem] border border-cyan-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-cyan-600">Today’s Overview</p>
                    <h2 className="mt-1 text-2xl font-semibold text-slate-900">Feeling grounded</h2>
                  </div>
                  <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700">
                    <FiHeart className="text-xl" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Mood score</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">82%</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Journal streak</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">7 days</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-500 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Daily reflection</span>
                    <FiCheckCircle />
                  </div>
                  <p className="mt-2 text-sm text-cyan-50">
                    A calm check-in can help create more clarity and peace throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to feel more supported
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">How It Works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A gentle path toward daily clarity
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {index === 0 && 'Create your secure account and personalize your experience.'}
                    {index === 1 && 'Check in with simple mood prompts that feel supportive and realistic.'}
                    {index === 2 && 'Capture thoughts, feelings, and reflections in a calming journal space.'}
                    {index === 3 && 'Review progress and see patterns that help you move forward with intention.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>





        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Common questions, answered clearly
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    <FiChevronDown className="text-cyan-600" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-900">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="rounded-[35px] bg-slate-900 p-12 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold">

            Ready to Begin Your Wellness Journey?

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">

            Join MindCare AI to monitor your mood,
            write personal journals,
            receive AI-powered insights,
            and build healthier habits every day.

          </p>

          <button
            onClick={() => token ? navigate("/dashboard") : navigate("/register")}
            className="mt-8 rounded-full bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600 hover:scale-105"
          >
            Get Started
          </button>

        </div>

      </section>
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 MindCare AI • Empowering Better Mental Wellness Through Technology.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-cyan-600">Instagram</a>
            <a href="#" className="transition hover:text-cyan-600">LinkedIn</a>
            <a href="#" className="transition hover:text-cyan-600">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;