const log = require('../util/log')
const request = require('postman-request')
const base_url = "http://api.weatherstack.com/current?access_key=95879eda356a4e0dc63db64fd404cb8a&query="
const geo_base_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Manaus.json?access_token=pk.eyJ1IjoiY2FzdGVsbGVzIiwiYSI6ImNrZmZvd3FoNzBneDAzMXQ5bm4zdzduMW0ifQ.Y0XbCbsqGX6twmcB3kDR5w&limit=1"


// const get = request({ url: geo_base_url, json: true }, (error, response) => {

//     if (error) {
//         // console.log(JSON.stringify(response.body.features[0].geometry))
//         log.error('Unable to connect to weather service!')
//     } else if (response.body.error) {
//        log.error('Unable to connect to find location!')   
//     } else if(response.body.features.length == 0) {
//        log.error('Unable to find location! Try another search')   
//     } else {
//         const latitude = response.body.features[0].geometry.coordinates[1]
//         const longitude = response.body.features[0].geometry.coordinates[0]
//         getWeather(latitude, longitude)   
//     }
// })

// function getWeather(latitude, longitude) {
//     const urlWithCoordinates = base_url + `${latitude},${longitude}`
//     request({ url : urlWithCoordinates, json: true}, (error, response) => {
//         if (error) {
//             log.error('Unable to connect to weather service!')
//         } else if (response.body.error) {
//             log.error('Unable to find location!')   
//         } else {
//             // console.log(response.body)
//             const desc = response.body.current.weather_descriptions[0]
//             log.debug(`${desc}. It's currently ${response.body.current.temperature} degrees out. 
//             It feels like ${response.body.current.feelslike} degrees out`)
//         }
//     })
// }

// module.exports = get

// const geocode = (address, callback) => {
//     const geo_base_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiY2FzdGVsbGVzIiwiYSI6ImNrZmZvd3FoNzBneDAzMXQ5bm4zdzduMW0ifQ.Y0XbCbsqGX6twmcB3kDR5w&limit=1"
//     request({ url: geo_base_url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location service!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search', undefined)
//         } else if (response) {
//             callback(undefined, {
//                 latitude: response.body.features[0].geometry.coordinates[1],
//                 longitude: response.body.features[0].geometry.coordinates[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// const get = geocode('Manaus', (error, data) => {
//     log.error("error", error)
//     log.debug(JSON.stringify(data))
// })

// module.exports = {
//     get
// }