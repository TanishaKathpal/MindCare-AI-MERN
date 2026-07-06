function TodayMoodCard({ todayMood }) {
  if (!todayMood) {
    return (
      <div className="mt-10 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8 text-center">
        <div className="text-5xl">🌿</div>

        <h2 className="mt-4 text-2xl font-bold text-slate-700">
          No Mood Logged Today
        </h2>

        <p className="mt-2 text-slate-500">
          Select an emotion above and save your first mood for today.
        </p>
      </div>
    );
  }

  const emojiMap = {
    Amazing: "🤩",
    Happy: "😊",
    Okay: "🙂",
    Sad: "😔",
    Terrible: "😭",
  };

  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-800">
        Today's Mood ❤️
      </h2>

      <div className="mt-6 flex items-center gap-5">

        <div className="text-6xl">
          {emojiMap[todayMood.mood]}
        </div>

        <div>

          <div className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

    ✔ Logged Today

</div>

          <p className="mt-2 text-slate-500">
            {todayMood.note}
          </p>

        </div>

      </div>

    </div>
  );
}

export default TodayMoodCard;