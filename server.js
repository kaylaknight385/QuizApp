const express = require('express');
const cors = require('cors');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve your HTML/CSS/JS files

app.post('/api/explain', async (req, res) => {
  try {
    const { question, wrongAnswer, correctAnswer } = req.body;

    // Check if we should use mock mode (no API key or for testing)
    const useMockMode = !process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your-openai-api-key-here';

    if (useMockMode) {
      // Mock response for testing without API
      const mockExplanation = `Great try! The correct answer is "${correctAnswer}" because it's the fundamental concept here. Keep practicing and you'll master this! You're doing awesome! 🌟`;
      
      // Simulate API delay
      setTimeout(() => {
        res.json({ explanation: mockExplanation });
      }, 800);
      return;
    }

    const requestBody = JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{
        role: 'system',
        content: "You're a charming, friendly coding bunny tutor. Keep explanations to 2-3 friendly, playful, encouraging sentences. Keep it simple, cute, and supportive."
      }, {
        role: 'user',
        content: `A student got this quiz question wrong:

Question: ${question}
They answered: ${wrongAnswer}
Correct answer: ${correctAnswer}

Explain why the correct answer is right.`
      }],
      max_tokens: 150,
      temperature: 0.7
    });

    const options = {
      hostname: 'api.openai.com',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    const apiRequest = https.request(options, (apiResponse) => {
      let data = '';

      apiResponse.on('data', (chunk) => {
        data += chunk;
      });

      apiResponse.on('end', () => {
        if (apiResponse.statusCode === 200) {
          const parsedData = JSON.parse(data);
          res.json({ explanation: parsedData.choices[0].message.content });
        } else {
          console.error('API Error:', apiResponse.statusCode, data);
          // Fallback to mock response on API error
          res.json({ explanation: `The correct answer is "${correctAnswer}". Keep studying and you'll get it next time! 💪` });
        }
      });
    });

    apiRequest.on('error', (error) => {
      console.error('Request Error:', error);
      // Fallback to mock response on request error
      res.json({ explanation: `The correct answer is "${correctAnswer}". Don't worry, keep learning! 🌟` });
    });

    apiRequest.write(requestBody);
    apiRequest.end();

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get explanation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
