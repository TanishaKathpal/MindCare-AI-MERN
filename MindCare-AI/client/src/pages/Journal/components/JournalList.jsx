import { useState } from "react";

import {
  FiEdit2,
  FiTrash2,
  FiSave,
  FiX,
} from "react-icons/fi";

import {
  updateJournal,
  deleteJournal,
} from "../../../services/journalService";
import { jsPDF } from "jspdf";

function JournalList({
  journals,
  fetchJournals,
}) {

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this journal?")) return;

    try {

      await deleteJournal(id);

      fetchJournals();

    } catch {

      toast.error("Unable to delete journal.");

    }

  };

  const startEditing = (journal) => {

    setEditingId(journal._id);

    setEditTitle(journal.title);

    setEditContent(journal.content);

  };

  const handleUpdate = async () => {

    try {

      await updateJournal(editingId, {
        title: editTitle,
        content: editContent,
      });

      setEditingId(null);

      fetchJournals();

    } catch {

      toast.error("Unable to update journal.");

    }

  };
  const downloadPDF = (journal) => {

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("MindCare AI", 20, 20);

  doc.setFontSize(16);
  doc.text("Journal Entry", 20, 35);

  doc.setFontSize(12);

  doc.text(`Title: ${journal.title}`, 20, 50);

  doc.text(
    `Date: ${new Date(journal.createdAt).toLocaleDateString()}`,
    20,
    60
  );

  const lines = doc.splitTextToSize(
    journal.content,
    170
  );

  doc.text("Content:", 20, 75);

  doc.text(lines, 20, 85);

  doc.save(`${journal.title}.pdf`);

};

  return (

    <div className="mt-10">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-slate-800">
          Recent Journal Entries
        </h2>

        <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">
          {journals.length} {journals.length === 1 ? "Entry" : "Entries"}
        </span>

      </div>

      {journals.length === 0 ? (

        <div className="mt-6 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">

          <h3 className="text-2xl font-semibold text-slate-800">
            No Journal Entries Yet
          </h3>

          <p className="mt-3 leading-7 text-slate-500">
            Start writing your first reflection to preserve your
            thoughts and memories.
          </p>

        </div>

      ) : (

        <div className="mt-6 space-y-5">

          {journals.map((journal) => (

            <div
              key={journal._id}
              className="rounded-[28px] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                {editingId === journal._id ? (

                  <input
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                    className="w-full rounded-xl border px-3 py-2"
                  />

                ) : (

                  <h3 className="text-xl font-semibold text-slate-900">
                    {journal.title}
                  </h3>

                )}

                <span className="ml-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">

                  {new Date(journal.createdAt).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}

                </span>

              </div>

              {editingId === journal._id ? (

                <textarea
                  rows={5}
                  value={editContent}
                  onChange={(e) =>
                    setEditContent(e.target.value)
                  }
                  className="mt-4 w-full rounded-xl border p-3"
                />

              ) : (

                <p className="mt-4 leading-7 text-slate-600">

                  {journal.content.length > 180
                    ? journal.content.slice(0, 180) + "..."
                    : journal.content}

                </p>

              )}
                            <div className="mt-6 flex justify-end gap-3">

                {editingId === journal._id ? (

                  <>

                    <button
                      onClick={handleUpdate}
                      className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700"
                    >
                      <FiSave size={18} />
                      Save
                    </button>

                    <button
                      onClick={() => setEditingId(null)}
                      className="flex items-center gap-2 rounded-xl bg-slate-400 px-4 py-2 text-white transition hover:bg-slate-500"
                    >
                      <FiX size={18} />
                      Cancel
                    </button>

                  </>

                ) : (

                  <>

                    <button
                      onClick={() => startEditing(journal)}
                      className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600"
                    >
                      <FiEdit2 size={18} />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(journal._id)}
                      className="flex items-center gap-2 rounded-xl bg-rose-500 px-4 py-2 text-white transition hover:bg-rose-600"
                    >
                      <FiTrash2 size={18} />
                      Delete
                    </button>

                    <button
onClick={() => downloadPDF(journal)}
className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-white transition hover:bg-indigo-600"
>

📄 PDF

</button>

                  </>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default JournalList;