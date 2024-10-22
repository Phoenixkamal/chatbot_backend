const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')

async function logger(message, filePath,filename){
    if (!fs.existsSync(filePath)) {
        try {
            await fsPromises.mkdir(filePath, { recursive: true })
            await fsPromises.writeFile(path.join(filePath, filename), message)
        }
        catch (err) {
            console.log(`Error : ${err.message}`)
        }
    }
    else{
        try {
            await fsPromises.appendFile(path.join(filePath, filename), message)
        }
        catch (err) {
            console.log(`Error : ${err.message}`)
        }
    }
}

module.exports = logger