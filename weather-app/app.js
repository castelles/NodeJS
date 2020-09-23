const forecast = require('./service/forecast')
const geocode = require('./service/geocode')
const log = require('./util/log')

const place = process.argv[2]

if (!place) {
    log.error('Please, provide a address!')
} else {
    geocode(
        place,
        (error, {latitude, longitude, location} = {}) => {
            if (error) {
                return log.error(error)
            } 
            return forecast(
                latitude,
                longitude,
                (error, forecastData) => {
                    if (error) {
                        return log.error(error)
                    }
                    return log.debug(`${location}. 
                    ${forecastData.description}. It's currently ${forecastData.temperature} degrees out. 
                        It feels like ${forecastData.feelslike} degrees out`)
                    // log.debug(JSON.stringify(data))
                }
            )
            
        },
    )
}