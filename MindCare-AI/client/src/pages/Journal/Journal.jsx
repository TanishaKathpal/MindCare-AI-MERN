import { useEffect, useState } from "react";

import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";
import toast from "react-hot-toast";

import {
  createJournal,
  getJournals,
} from "../../services/journalService";
import AppLayout from "../../layouts/AppLayout";

function Journal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [journals, setJournals] = useState([]);

  const [loading, setLoading] = useState(false);

  // Fetch Journals
  const fetchJournals = async () => {
    try {
      const res = await getJournals();

      setJournals(res.data.journals);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  // Save Journal
  const handleSave = async () => {

    if (!title || !content) return;

    try {

      setLoading(true);

      await createJournal({
        title,
        content,
      });

      toast.success("Journal Saved Successfully ❤️");

      setTitle("");
      setContent("");

      fetchJournals();

    } catch (error) {

      (
        error.response?.data?.message ||
        toast.error("Unable to save journal.")
      );

    } finally {

      setLoading(false);

    }

  };

  return (
  <AppLayout>

    <div className="px-8 py-10">

      <div className="mx-auto max-w-5xl">

        {/* Hero */}

        <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-8 text-white shadow-xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
            Daily Journaling
          </p>

          <h1 className="mt-3 text-3xl font-semibold">
            Capture Your Thoughts
          </h1>

          <p className="mt-4 max-w-2xl leading-8 text-cyan-50">
            Write freely about your day, organize your thoughts,
            and build a habit of mindful reflection.
          </p>

        </div>

        {/* Journal Form */}

        <div className="mt-10">

          <JournalForm
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            handleSave={handleSave}
            loading={loading}
          />

        </div>

        {/* Journal List */}

        <div className="mt-10">

          <JournalList
  journals={journals}
  fetchJournals={fetchJournals}
/>

        </div>

      </div>

    </div>

  </AppLayout>
);
}
export default Journal;