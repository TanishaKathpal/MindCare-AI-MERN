import {
  FiMail,
  FiCalendar,
  FiUser,
  FiAward,
} from "react-icons/fi";

import profileImage from "../../../assets/image.png";

function ProfileCard({ user }) {
  return (
    <div className="rounded-3xl bg-white shadow-xl overflow-hidden">

      <div className="grid md:grid-cols-2 items-center">

        {/* LEFT */}

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-10 text-white">

          <img
            src={profileImage}
            alt="Profile Illustration"
            className="mx-auto w-72"
            />
          <h2 className="mt-8 text-4xl font-bold">
            {user?.name}
          </h2>

          <p className="mt-2 opacity-90">
            Keep taking care of yourself 💙
          </p>

        </div>

        {/* RIGHT */}

        <div className="p-10">

          <div className="flex items-center gap-4">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl font-bold text-white">

              {user?.name?.charAt(0).toUpperCase()}

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {user?.name}
              </h2>

              <p className="mt-2 flex items-center gap-2 text-slate-500">
                <FiMail />
                {user?.email}
              </p>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-slate-100 p-5">

              <FiUser
                className="text-cyan-600"
                size={24}
              />

              <p className="mt-3 text-sm text-slate-500">
                Gender
              </p>

              <h3 className="text-xl font-semibold">
                {user?.gender}
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-100 p-5">

              <FiCalendar
                className="text-cyan-600"
                size={24}
              />

              <p className="mt-3 text-sm text-slate-500">
                Age
              </p>

              <h3 className="text-xl font-semibold">
                {user?.age}
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-100 p-5">

              <FiAward
                className="text-cyan-600"
                size={24}
              />

              <p className="mt-3 text-sm text-slate-500">
                Mood Streak
              </p>

              <h3 className="text-xl font-semibold">
                5 Days 🔥
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-100 p-5">

              <span className="text-2xl">
                🌿
              </span>

              <p className="mt-3 text-sm text-slate-500">
                Wellness
              </p>

              <h3 className="text-xl font-semibold">
                Excellent
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileCard;