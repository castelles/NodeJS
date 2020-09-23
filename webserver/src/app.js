const express = require('express')
const path = require('path')
const log = require('../util/log')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Caio',
        age: '23'
    })
})

app.get('/about', (req, res) => {
    res.send('<h2>about Page</h2>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Manaus'
    })
})

app.listen(3000, () => {
    log.debug('Server is up on port 3000.')
})