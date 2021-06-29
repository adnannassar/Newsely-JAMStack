const axios = require("axios");
require('dotenv').config();
const scienceInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=${process.env.API_KEY_2_NEWS}&pageSize=12`;

async function getNews ()  {
    try {
        const response = await axios.get(scienceInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
