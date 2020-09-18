const axios = require("axios");


const citiesArray =
    ['dortmund','munich', 'paris', 'london'];

async function getWeather ()  {
   const city = citiesArray[Math.floor(Math.random() * citiesArray.length)];

    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=munich&units=metric&appid=41ad88a1f768b910e390f99a84773acb`;
    try {
        const response = await axios.get(weatherURL);
        return response.data;
    } catch (error) {

        console.log(error);
    }
};

module.exports = getWeather();
