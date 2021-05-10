const axios = require("axios");
require('dotenv').config();
const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=${process.env.API_KEY_3_NEWS}&pageSize=12`;

async function getNews ()  {
    try {
        const response = await axios.get(entertainmentInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
