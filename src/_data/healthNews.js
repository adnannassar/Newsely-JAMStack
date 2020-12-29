const axios = require("axios");
require('dotenv').config();
const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=${process.env.API_KEY_2_NEWS}&pageSize=19`;

async function getNews ()  {
    try {
        const response = await axios.get(healthInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
