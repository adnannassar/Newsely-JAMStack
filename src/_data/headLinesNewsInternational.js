const axios = require("axios");
require('dotenv').config();
const topInternationalHeadLines = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY_1_NEWS}&pageSize=1`;

async function getNews ()  {
    try {
        const response = await axios.get(topInternationalHeadLines);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
