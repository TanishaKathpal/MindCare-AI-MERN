function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Section */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-400 p-12 text-white relative overflow-hidden">

          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="relative z-10">

            <h1 className="text-5xl font-bold">
              MindCare AI
            </h1>

            <p className="mt-6 text-xl leading-9 text-blue-100">
              Smart Mental Wellness Platform
            </p>

            <div className="mt-14 space-y-5">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>Track your mood daily</p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>Write private journals</p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>AI powered mental insights</p>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-white"></div>

                <p>Beautiful analytics dashboard</p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="p-8 md:p-14 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="text-slate-500 mt-3 mb-10">
            {subtitle}
          </p>

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;