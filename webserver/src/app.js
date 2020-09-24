const express = require('express')
const path = require('path')
const log = require('../util/log')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static diectory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Caio Arthur'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About',
        name: 'Caio Arthur'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is helpful',
        name: 'Caio Telles',
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: 'Help',
        name: 'Caio Telles',
        errorMessage: 'Help Article Not Found',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Caio Telles',
        errorMessage: 'Page Not Found'
    })
})

// app.get('', (req, res) => {
//     res.send('<h1>Hello express</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Caio',
//         age: '23'
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h2>about Page</h2>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Manaus'
    })
})

app.listen(3000, () => {
    log.debug('Server is up on port 3000.')
})