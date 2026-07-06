function MoodNote({ note, setNote }) {
  return (
  <div className="mt-10 rounded-[28px] bg-white p-6 shadow-lg">

    <div className="flex items-center justify-between">

      <label className="text-lg font-semibold text-slate-800">
        Daily Reflection
      </label>

      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
        Optional
      </span>

    </div>

    <p className="mt-2 text-sm text-slate-500">
      Write a few words about how your day went or what you're feeling.
    </p>

    <textarea
      rows={5}
      maxLength={300}
      value={note}
      onChange={(e) => setNote(e.target.value)}
      placeholder="What's on your mind today?"
      className="mt-5 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
    />

    <div className="mt-3 flex items-center justify-between">

      <p className="text-sm text-slate-400">
        Your reflections remain private.
      </p>

      <span
        className={`text-sm font-medium ${
          note.length > 250
            ? "text-rose-500"
            : "text-slate-500"
        }`}
      >
        {note.length}/300
      </span>

    </div>

  </div>
);
}

export default MoodNote;