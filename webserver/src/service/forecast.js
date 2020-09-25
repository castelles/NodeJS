const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?" +
    "access_key=95879eda356a4e0dc63db64fd404cb8a&query=" + latitude + "," + longitude

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.error) {
            console.log(error)
            callback('Unable to get weather. Try again later', undefined)
        } else if (body) {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast