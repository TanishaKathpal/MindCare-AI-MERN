const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const analyzeMood = async (req, res) => {
  try {
    const { mood, journal } = req.body;

    const prompt = `
You are a compassionate mental wellness coach.

User's Mood:
${mood}

Journal:
${journal}

Respond ONLY in valid JSON.

Format:

{
  "analysis":"...",
  "advice":"...",
  "motivation":"..."
}

Rules:
- No markdown
- No backticks
- No extra explanation
- analysis: maximum 60 words
- advice: maximum 60 words
- motivation: one sentence
`;
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const aiText = completion.choices[0].message.content;

const parsed = JSON.parse(aiText);

res.json({
    success: true,
    response: parsed,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI Failed",
    });
  }
};

module.exports = {
  analyzeMood,
};