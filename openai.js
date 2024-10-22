const express = require('express')
const axios = require('axios')
const app = express()
const port = 6000

app.use(express.json())

const OPENAI_API_KEY = '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'

app.post('/translate', async (req, res) => {
  try {
    const { text } = req.body;
    console.log(text)

    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-3.5-turbo',
        prompt: `Translate the following English text to French: "${text}"`,
        max_tokens: 60,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const translatedText = response.data.choices[0].text.trim()
    res.json({ translatedText })
  } catch (error) {
    console.error('Error:', error.message)
    res.status(500).json({ error: error.message })
    console.error('Error details:', error.response ? error.response.data : error.message)
  }
})


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
})
