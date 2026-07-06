const moods = [
  { emoji: "🤩", label: "Amazing" },
  { emoji: "😊", label: "Happy" },
  { emoji: "🙂", label: "Okay" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😭", label: "Terrible" },
];

function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-5">
      {moods.map((item) => (
        <button
          key={item.label}
          onClick={() => setSelectedMood(item.label)}
          className={`group rounded-[28px] border bg-white p-6 transition-all duration-300

${
  selectedMood === item.label
    ? "border-cyan-500 bg-cyan-50 shadow-xl ring-2 ring-cyan-200 scale-105"
    : "border-slate-200 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-lg"
}`}
        >
          <div className="text-6xl transition duration-300 group-hover:scale-110">{item.emoji}</div>

          <h3 className="mt-5 text-lg font-semibold text-slate-800">
            <div className="text-6xl transition duration-300 group-hover:scale-110"></div>
            {item.label}
          </h3>
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;