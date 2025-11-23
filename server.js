const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve your HTML/CSS/JS files

app.post('/api/explain', async (req, res) => {
  try {
    const { question, wrongAnswer, correctAnswer } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 150,
        messages: [{
          role: 'user',
          content: `You're a charming, friendly coding bunny tutor. A student got this quiz question wrong:

Question: ${question}
They answered: ${wrongAnswer}
Correct answer: ${correctAnswer}

Explain why the correct answer is right in 2-3 friendly, playful, encouraging sentences. Keep it simple, cute, and supportive.`
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    res.json({ explanation: data.content[0].text });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get explanation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
