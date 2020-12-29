const axios = require("axios");
require('dotenv').config();
const sportsInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=${process.env.API_KEY_2_NEWS}&pageSize=12`;

async function getNews ()  {
    try {
        const response = await axios.get(sportsInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
