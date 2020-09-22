const axios = require("axios");

const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=11`;

async function getNews ()  {
    try {
        const response = await axios.get(healthInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
