const express = require('express')
const router = express.Router()
const {handleUserQuery} = require('../controller/chatbot_controller')

router.route('/')
    .post(handleUserQuery)

module.exports = router
