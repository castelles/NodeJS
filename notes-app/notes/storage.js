const fs = require('fs')

const save = args => fs.writeFileSync(`./notes/${args.title}.json`, args.json) 

const read = args => {
    const dataBuffer = fs.readFileSync(`./notes/${args.title}.json`)
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}

module.exports = {
    save,
    read
}