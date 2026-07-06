

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import TodayMoodCard from "./components/TodayMoodCard";
import {
  getTodayMood,
  createMood,
  updateMood,
  deleteMood,
} from "../../services/moodService";
import MoodSelector from "./components/MoodSelector";
import MoodNote from "./components/MoodNote";


import {
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import AppLayout from "../../layouts/AppLayout";

function Mood() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [todayMood, setTodayMood] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTodayMood = async () => {
    try {
      const res = await getTodayMood();

      setTodayMood(res.data.mood);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodayMood();
  }, []);

  useEffect(() => {

    if (todayMood) {

      setSelectedMood(todayMood.mood);
      setNote(todayMood.note);

    }

  }, [todayMood]);

  const handleSaveMood = async () => {
    if (!selectedMood) return;

    try {
      setLoading(true);

      await createMood({
        mood: selectedMood,
        note,
      });

      toast.success("Mood Saved Successfully ❤️");

      setSelectedMood("");
      setNote("");

      fetchTodayMood();

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Unable to save mood."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateMood = async () => {

    try {

      setLoading(true);

      await updateMood(todayMood._id, {
        mood: selectedMood,
        note,
      });

      toast.success("Mood Updated ❤️");

      fetchTodayMood();

    } catch (err) {

      toast.error("Unable to update mood.");

    } finally {

      setLoading(false);

    }

  };

  const handleDeleteMood = async () => {

    if (!window.confirm("Delete today's mood?")) return;

    try {

      setLoading(true);

      await deleteMood(todayMood._id);

      setTodayMood(null);
      setSelectedMood("");
      setNote("");

      toast.success("Mood Deleted ❤️");

    } catch {

      toast.error("Unable to delete mood.");

    } finally {

      setLoading(false);

    }

  };
  return (
    <AppLayout>

      <div className="px-8 py-10">

        <div className="mx-auto max-w-5xl">

          {/* Header */}

          <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-8 text-white shadow-xl">

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
              Daily Check-In
            </p>

            <h1 className="mt-3 text-3xl font-semibold">
              How are you feeling today?
            </h1>

            <p className="mt-4 text-cyan-50">
              Every emotion matters. Track your mood,
              reflect on your thoughts, and build healthier habits.
            </p>

          </div>

          {/* Mood Cards */}

          <MoodSelector
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
          />

          {/* Note */}

          <MoodNote
            note={note}
            setNote={setNote}
          />

          {/* Buttons */}

          <div className="mt-8 flex justify-center gap-4">

            {!todayMood ? (

              <button
                onClick={handleSaveMood}
                disabled={!selectedMood || loading}
                className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 py-4 text-lg font-semibold text-white"
              >
                {loading ? "Saving..." : "Complete Check-In"}
              </button>

            ) : (

              <>

                <button
                  onClick={handleUpdateMood}
                  disabled={loading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 py-3 font-semibold text-white transition hover:shadow-lg"
                >
                  <FiEdit2 size={18} />
                  <span>Update Mood</span>
                </button>

                <button
                  onClick={handleDeleteMood}
                  disabled={loading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 py-3 font-semibold text-white transition hover:shadow-lg"
                >
                  <FiTrash2 size={18} />
                  <span>Delete Mood</span>
                </button>

              </>

            )}

          </div>

          {/* Today's Mood */}

          <TodayMoodCard todayMood={todayMood} />

        </div>

      </div>

    </AppLayout>
  );
}

export default Mood;