const express = require('express')
const app = express()
const PORT = 5000
const chatRouter = require('./router/chatbot')
const cors = require('cors');
const serverlog = require('./middleware/serverlog')
const errorlog = require('./middleware/errorlog')
const corsOptions = require('./config/corsopt')

app.use(serverlog)

app.use(cors(corsOptions));
app.use(express.json())

app.use('/chat',chatRouter)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(errorlog)
app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)})