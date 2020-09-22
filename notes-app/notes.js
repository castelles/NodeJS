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

// JSONArray
const loadNotes = () => {
    const titleFileNotes = 'notes'
    return storage.read(titleFileNotes)
}

const page = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        log.warning(note.title)
        log.debug("    " + note.body + "\n")
    })
}

const remove = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => {
        return note.title !== title
    })

    if (notesToKeep.length < notes.length) {
        log.good('Note removed!')
        storage.saveNote(notesToKeep)
    } else {
        log.error('Note not found!')
    }
}


module.exports = {
    getNotes,
    addNote: add,
    delete: remove,
    list: page,
}