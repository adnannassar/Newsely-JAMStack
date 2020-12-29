const axios = require("axios");
require('dotenv').config();
const topHeadLinesInGermany = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.API_KEY_2_NEWS}&pageSize=3`;

async function getNews ()  {
    try {
        const response = await axios.get(topHeadLinesInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getNews();
