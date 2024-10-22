const { v4: uuidv4 } = require('uuid')
const { format } = require('date-fns')
const logger = require('./logger')
const path = require('path')
const filePath = path.join(__dirname, '..', 'files')

const serverlog = (req, res, next) => {
    const uuid = uuidv4()
    const date = format(new Date(), "dd-MM-yyyy")
    const logMsg = `${uuid}\t\t${date}\t\t${req.method}\t\t${req.path}\t\t${req.headers.origin}\n`
    logger(logMsg, filePath,'logfile.txt')
    next()
}

module.exports = serverlog