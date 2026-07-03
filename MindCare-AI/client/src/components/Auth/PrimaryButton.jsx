function PrimaryButton({
  children,
  loading,
  type = "submit",
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default PrimaryButton;