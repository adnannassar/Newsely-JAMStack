const axios = require("axios");

require('dotenv').config();
const citiesArray =
    ['dortmund', 'munich', 'paris', 'london'];

async function getWeather() {
    const city = citiesArray[Math.floor(Math.random() * citiesArray.length)];

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=dortmund&units=metric&appid=${process.env.API_KEY_WEATHER}`;
    try {
        const response = await axios.get(weatherURL);
        return response.data;
    } catch (error) {

        console.log(error);
    }
};

module.exports = getWeather();
