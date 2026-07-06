import { useEffect, useState } from "react";
import { getTodayMood } from "../../services/moodService";
import { getJournals } from "../../services/journalService";
import { analyzeMood } from "../../services/aiService";
import { FiCpu } from "react-icons/fi";
import toast from "react-hot-toast";


import AppLayout from "../../layouts/AppLayout";
function AIInsights() {
  const [todayMood, setTodayMood] = useState(null);
  const [todayJournal, setTodayJournal] = useState(null);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);


  useEffect(() => {

    const fetchData = async () => {

      try {

        const moodRes = await getTodayMood();
        setTodayMood(moodRes.data.mood);

        const journalRes = await getJournals();

        if (journalRes.data.journals.length > 0) {
          setTodayJournal(journalRes.data.journals[0]);
        }

      } catch (error) {

        console.log(error);

        toast.error(
          error.response?.data?.message ||
          "Unable to generate AI insight."
        );

      }
    };

    fetchData();

  }, []);

  const handleAnalyze = async () => {

    if (!todayMood || !todayJournal) {
      toast.error("Please log today's mood and journal first.");
      return;
    }

    try {

      setLoading(true);

      const res = await analyzeMood({
        mood: todayMood.mood,
        journal: todayJournal.content,
      });

      setResponse(res.data.response);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  return (
    <AppLayout>

      <div className="px-8 py-10">

        <div className="mx-auto max-w-5xl">

          {/* Hero */}

          <div className="rounded-[32px] bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500 p-8 text-white shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">
                  AI Coach
                </p>

                <h1 className="mt-3 text-3xl font-semibold">
                  Personalized Wellness Insights
                </h1>

                <p className="mt-5 max-w-2xl leading-8 text-cyan-50">
                  Analyze your mood and journal entries to receive
                  supportive emotional insights, wellness advice,
                  and personalized daily motivation.
                </p>

              </div>

              <div className="hidden lg:flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur">

                <FiCpu className="text-5xl text-white" />

              </div>

            </div>

          </div>

          {/* Summary */}

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-xl">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Mood */}

              <div className="rounded-2xl bg-cyan-50 p-6">

                <h2 className="text-xl font-bold text-slate-800">
                  Today's Wellness Summary
                </h2>

                <p className="mt-5 text-lg font-semibold">

                  {todayMood
                    ? `${todayMood.mood === "Amazing"
                      ? "🤩"
                      : todayMood.mood === "Happy"
                        ? "😊"
                        : todayMood.mood === "Okay"
                          ? "🙂"
                          : todayMood.mood === "Sad"
                            ? "😔"
                            : "😭"} ${todayMood.mood}`
                    : "No mood logged"}

                </p>

              </div>

              {/* Journal */}

              <div className="rounded-2xl bg-slate-50 p-6">

                <h2 className="text-xl font-bold text-slate-800">
                  Latest Journal Entry
                </h2>

                {todayJournal ? (
                  <>
                    <h3 className="mt-4 font-semibold text-slate-800">
                      {todayJournal.title}
                    </h3>

                    <p className="mt-3 whitespace-pre-line text-slate-600">
                      {todayJournal.content}
                    </p>
                  </>
                ) : (
                  <p className="mt-4 text-slate-500">
                    No journal entry found.
                  </p>
                )}

              </div>

            </div>

            {/* Buttons */}

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl"
            >

              {loading ? (
                <div className="flex items-center gap-3">

                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

                  <span>Generating Insight...</span>

                </div>
              ) : (
                "Generate AI Insights"
              )}

            </button>

            <div className="mt-6 flex gap-4">

              <button
                className="flex-1 rounded-xl border border-cyan-300 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
                onClick={() => {

                  if (!response) return;

                  navigator.clipboard.writeText(

                    `${response.analysis}

${response.advice}

${response.motivation}`

                  );

                }}
              >
                Copy
              </button>

              <button
                className="flex-1 rounded-xl border border-cyan-300 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
                onClick={handleAnalyze}
              >
                Generate Again
              </button>

            </div>

          </div>

          {/* AI Report */}

          {response && (

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

              <h2 className="mb-4 text-2xl font-bold text-slate-800">
                AI Wellness Report
              </h2>

              <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8">

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">

                    <FiCpu className="text-3xl text-cyan-700" />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-slate-800">
                      AI Wellness Insight
                    </h2>

                    <p className="text-sm text-slate-500">
                      Personalized guidance generated by AI
                    </p>

                  </div>

                </div>

                <div className="space-y-6">

                  <div className="rounded-2xl bg-cyan-50 p-5">

                    <h3 className="font-bold text-cyan-700">
                      Emotional Analysis
                    </h3>

                    <p className="mt-2">{response.analysis}</p>

                  </div>

                  <div className="rounded-2xl bg-green-50 p-5">

                    <h3 className="font-bold text-green-700">
                      Wellness Advice
                    </h3>

                    <p className="mt-2">{response.advice}</p>

                  </div>

                  <div className="rounded-2xl bg-yellow-50 p-5">

                    <h3 className="font-bold text-yellow-700">
                      Daily Motivation
                    </h3>

                    <p className="mt-2 italic">{response.motivation}</p>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </AppLayout>
  );
}

export default AIInsights;