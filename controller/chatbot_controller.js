const {GoogleGenerativeAI} = require("@google/generative-ai")
require('dotenv').config();
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

const handleUserQuery = async (req, res)=> {
    const userMessage = req.body.message || "hello"
    try {
        const result = await model.generateContent(userMessage)
        const bot_reply = result.response.text()
        res.json({ "bot": `${bot_reply}` })
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    handleUserQuery
}