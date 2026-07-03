import React from 'react';
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
} from "react-icons/fi";

const features = [
  {
    title: 'Mood Tracking',
    description: 'Log your emotions with calm, guided prompts and understand your patterns over time.',
    icon: FiSmile,
  },
  {
    title: 'Smart Journal',
    description: 'Capture thoughts, reflections, and daily wins in a private and supportive space.',
    icon: FiBookOpen,
  },
  {
    title: 'Wellness Analytics',
    description: 'Visualize progress and gain insight into habits that support better mental wellness.',
    icon: FiTrendingUp,
  },
  {
    title: 'Secure & Private',
    description: 'Your data stays protected with privacy-first design and secure account handling.',
    icon: FiShield,
  },
];

const steps = ['Sign Up', 'Track Mood', 'Write Journal', 'View Progress'];

const testimonials = [
  {
    quote:
      'MindCare AI helped me create a simple routine that made my emotional check-ins feel manageable.',
    name: 'Nina R.',
    role: 'Wellness Advocate',
  },
  {
    quote:
      'The interface feels calm, thoughtful, and genuinely supportive. I look forward to using it daily.',
    name: 'Marcus L.',
    role: 'Product Designer',
  },
  {
    quote:
      'It brings clarity to my mood patterns and makes journaling feel effortless and meaningful.',
    name: 'Asha P.',
    role: 'Entrepreneur',
  },
];

const faqs = [
  {
    question: 'Is MindCare AI suitable for daily mental wellness support?',
    answer:
      'Yes. It is designed for people who want a gentle, structured way to track emotions, journal, and reflect over time.',
  },
  {
    question: 'How is my information protected?',
    answer:
      'We use secure account practices and a privacy-first approach to help keep your personal wellness data protected.',
  },
  {
    question: 'Do I need prior experience with wellness apps?',
    answer:
      'No. The experience is designed to be simple, intuitive, and welcoming for both first-time and returning users.',
  },
];

function Landing() {
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
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 sm:block">
              Login
            </button>
            <button className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700">
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
              Your Mental Health Matters
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Support your emotional wellbeing with guided mood tracking, thoughtful journaling, and meaningful insights designed for everyday balance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700">
                Get Started
                <FiArrowRight className="ml-2" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600">
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by people who value calm and consistency
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-1 text-cyan-600">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiCheckCircle key={index} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                    <FiUser className="text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-xl sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Common questions, answered clearly
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <FiChevronDown className="text-cyan-300" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 MindCare AI. All rights reserved.</p>
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