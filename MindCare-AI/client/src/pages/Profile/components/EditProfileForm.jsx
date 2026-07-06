function EditProfileForm({
  formData,
  handleChange,
  handleUpdate,
  loading,
}) {

  return (

    <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-800">
        Edit Profile
      </h2>

      <div className="mt-8 space-y-5">

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full rounded-2xl border p-4 outline-none focus:border-cyan-500"
        />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full rounded-2xl border p-4 outline-none focus:border-cyan-500"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full rounded-2xl border p-4 outline-none focus:border-cyan-500"
        >
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>

        <button
          onClick={handleUpdate}
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

      </div>

    </div>

  );

}

export default EditProfileForm;