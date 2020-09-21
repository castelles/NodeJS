const storage = require('./notes/storage')
const log = require('./util/log')


const getNotes = function () {
    return 'Your notes...'
}

const add = (title, body) => {
    
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
    
        storage.saveNote(notes)
        log.good('New note added!')
    } else {
        log.error('Note title taken!')
    }
}

const loadNotes = () => {
    const titleFileNotes = 'notes'
    return storage.read(titleFileNotes)
}

module.exports = {
    getNotes,
    addNote: add,
}