function SaveMoodButton({
  selectedMood,
  handleSaveMood,
  loading,
}) {
  return (
    <button
      onClick={handleSaveMood}
      disabled={!selectedMood || loading}
      className={`mt-8 w-full rounded-2xl py-4 text-lg font-semibold text-white transition-all duration-300

      ${
        selectedMood
          ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-[1.02] hover:shadow-xl"
          : "cursor-not-allowed bg-slate-400 opacity-60"
      }`}
    >
      {loading ? "Saving..." : "Save Today's Mood"}
    </button>
  );
}

export default SaveMoodButton;