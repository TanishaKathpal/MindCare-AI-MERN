const mongoose = require("mongoose");
const Mood = require("../models/mood");
const Journal = require("../models/Journal");

const getDashboardAnalytics = async (req, res) => {

    try {

        const userId = req.user.id;

        // Total Mood Logs
        const totalMoods = await Mood.countDocuments({
            user: userId,
        });

        // Total Journal Entries
        const journalCount = await Journal.countDocuments({
            user: userId,
        });

        // Most Frequent Mood
        let moodDistribution = await Mood.aggregate([
  {
    $match: {
      user: new mongoose.Types.ObjectId(userId),
    },
  },
  {
    $group: {
      _id: "$mood",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
]);

moodDistribution = moodDistribution.map((item) => ({
  mood: item._id,
  count: item.count,
}));

// console.log(moodDistribution);

       const mostFrequentMood =
    moodDistribution.length > 0
        ? moodDistribution[0].mood
        : "No Data";

        // Last 7 Mood Logs
       const moods = await Mood.find({
    user: userId,
})
.sort({
    createdAt: 1,
})
.limit(7);

const moodScore = {
    Amazing: 5,
    Happy: 4,
    Okay: 3,
    Sad: 2,
    Terrible: 1,
};

const weeklyMoodTrend = moods.map((mood) => ({
    createdAt: mood.createdAt,
    score: moodScore[mood.mood],
}));

const wellnessScore = Math.min(
  100,
  Math.round((totalMoods * 5) + (journalCount * 3))
);

        res.status(200).json({

            success: true,

            stats: {

                totalMoods,

                journalCount,
                streak: totalMoods,
                wellnessScore,
                mostFrequentMood,

                moodDistribution,

                weeklyMoodTrend,

            },

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Server Error",

        });

    }

};

module.exports = {
    getDashboardAnalytics,
};