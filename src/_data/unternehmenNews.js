const axios = require("axios");
require('dotenv').config();
const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${process.env.API_KEY_3_NEWS}&pageSize=6`;

async function getNews ()  {
    try {
        const response = await axios.get(businessInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
