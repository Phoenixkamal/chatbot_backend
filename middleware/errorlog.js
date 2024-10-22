const path = require('path')
const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns')
const filePath = path.join(__dirname, '..', 'files')
const logger = require('./logger')

const errorlog = (err,req, res, next) => {
    const uuid = uuidv4()
    const date = format(new Date(), "dd-MM-yyyy");
    const logMsg = `${uuid}\t\t${date}\t\t${req.method}\t\t${req.path}\t\t${req.headers.origin}\t\t${err.message}\n`
    logger(logMsg, filePath,'errlog.txt')
    next()
}

module.exports = errorlog