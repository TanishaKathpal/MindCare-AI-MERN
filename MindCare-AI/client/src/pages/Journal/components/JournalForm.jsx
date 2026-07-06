function JournalForm({
  title,
  setTitle,
  content,
  setContent,
  handleSave,
  loading,
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-800">
        New Journal Entry
      </h2>

      <div className="mt-4 flex items-center justify-between">

  <p className="text-slate-500">

    Capture your thoughts and emotions.

  </p>

  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">

    Private

  </span>

</div>

      
      {/* Title */}

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700">
          Journal Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Morning Reflection..."
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />

      </div>

      {/* Content */}

      <div className="mt-6">

        <label className="mb-2 block font-semibold text-slate-700">
          Today's Thoughts
        </label>

        <textarea
          rows={6}
          maxLength={1000}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind today?"
          className="w-full rounded-2xl border border-slate-300 p-5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
        />

        <div className="mt-3 flex items-center justify-between">

    <p className="text-sm text-slate-400">

        Your journal stays private.

    </p>

    <span
        className={`text-sm font-medium ${
            content.length > 900
                ? "text-rose-500"
                : "text-slate-500"
        }`}
    >
        {content.length}/1000
    </span>

</div>
      </div>

      {/* Button */}

      <button
        onClick={handleSave}
        disabled={!title || !content || loading}
        className={`mt-8 w-full rounded-2xl py-4 text-lg font-semibold text-white transition-all duration-300

        ${
          title && content
            ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-[1.02] hover:shadow-xl"
            : "cursor-not-allowed bg-slate-400 opacity-60"
        }`}
      >
        {loading ? "Saving..." : "Save Journal"}
      </button>

    </div>
  );
}

export default JournalForm;