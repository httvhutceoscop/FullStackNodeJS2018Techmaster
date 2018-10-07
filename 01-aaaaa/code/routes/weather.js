/*
Khoá học FullStackNodejs 2018 - Techmaster Vietnam
Instructor: Nguyễn Đức Hoàng
*/
var express = require('express')
var router = express.Router()
var taskList = require('./tasksData')
//const fetch = require('node-fetch')
const axios = require('axios');
const { convertEpochDateToString, convertFarenheitToCelcius } = require('./helpers')
//http://dataservice.accuweather.com/forecasts/v1/daily/1day?apikey=X5B5kGGzaGe0EJLleMAPB8t8GNiHWQFE

/*
Step1: Get LocationKey:
http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q=21.0278,105.8342&apikey=X5B5kGGzaGe0EJLleMAPB8t8GNiHWQFE
Step2: Forecast:
http://dataservice.accuweather.com/forecasts/v1/daily/5day/353412?apikey=X5B5kGGzaGe0EJLleMAPB8t8GNiHWQFE&language=vi-vn&details=true
 */

const fetchWeatherData = async () => {
    const locationKey = "353412"
    const apiKey = "X5B5kGGzaGe0EJLleMAPB8t8GNiHWQFE"
    const language = "vi-vn"
    const urlString = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=${language}&details=true`
    console.log(urlString)
    axios({
        method: 'get',
        url: urlString,
        responseType: 'stream'
    })
        .then(function (response) {
            debugger
            console.log(`res33ponse forecast = ${JSON.stringify(response)}`)
        }).catch(error => {
            debugger
        });



    let dailyForecasts = await response.json()["DailyForecasts"]
    return dailyForecasts
}
router.get('/weatherForm', async (req, res) => {
    //let {id = 0} = req.body    
    // id = (id < 0 || id > dailyForecasts.length - 1) ? 0 : id    
    try {
        let dailyForecasts = await fetchWeatherData()
        let forecasts = await dailyForecasts.map(dailyForecast => {
            let forecast = {}
            forecast.date = convertEpochDateToString(dailyForecast["EpochDate"])
            let minDegree = convertFarenheitToCelcius(dailyForecast["Temperature"]["Minimum"]["Value"])
            let maxDegree = convertFarenheitToCelcius(dailyForecast["Temperature"]["Maximum"]["Value"])
            forecast.tempRange = `Nhiệt độ ${minDegree}-${maxDegree} độ C`
            forecast.content = `Ban ngày: ${dailyForecast["Day"]["IconPhrase"]}, ban đêm: ${dailyForecast["Night"]["IconPhrase"]}`

            let iconIndex = dailyForecast["Day"]["Icon"]
            iconIndex = (iconIndex < 10) ? `0${iconIndex}` : `${iconIndex}`
            forecast.urlImage = `https://developer.accuweather.com/sites/default/files/${iconIndex}-s.png`
            return forecast
        })

        // res.render("weatherForm", {
        //     forecasts
        // })
    } catch (error) {

    }
})

module.exports = router
