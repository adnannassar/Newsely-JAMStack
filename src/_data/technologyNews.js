const axios = require("axios");
require('dotenv').config();
const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${process.env.API_KEY_3_NEWS}&pageSize=18`;

async function getNews ()  {
    try {
        const response = await axios.get(technologyInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
