const express = require('express')
const path = require('path')
const log = require('../util/log')
const hbs = require('hbs')

const forecast = require('./service/forecast')
const geocode = require('./service/geocode')

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


app.get('/weather', (req, res) => {


    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(
        req.query.address,
        (error, {latitude, longitude, location} = {}) => {
            if (error) {
                return res.send({ error })
            } 
            return forecast(
                latitude,
                longitude,
                (error, forecastData) => {
                    if (error) {
                        return res.send({ error })
                    }
                    return res.send({
                        location,
                        address: req.query.address,
                        forecast: forecastData
                    })

                    return log.debug(`${location}. 
                    ${forecastData.description}. It's currently ${forecastData.temperature} degrees out. 
                        It feels like ${forecastData.feelslike} degrees out`)
                    // log.debug(JSON.stringify(data))
                }
            )
            
        },
    )
})

app.get('/products', (req, res) => {
    
    log.json(req.query)

    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: [],
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Caio Telles',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    log.debug('Server is up on port 3000.')
})