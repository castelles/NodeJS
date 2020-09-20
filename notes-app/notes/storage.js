const fs = require('fs')

const save = 
    args => 
        fs.writeFileSync(`./notes/${args.title}.json`, args.json) 

const saveNote = args => {
    const dataJSON = JSON.stringify(args)
    fs.writeFileSync(`./notes/notes.json`, dataJSON) 
}

const read = args => {

    try {
        const dataBuffer = fs.readFileSync(`./notes/${args}.json`)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    save,
    read,
    saveNote
}