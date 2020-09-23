const axios = require("axios");

const topHeadLinesInGermany = `https://newsapi.org/v2/top-headlines?country=de&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;

async function getNews ()  {
    try {
        const response = await axios.get(topHeadLinesInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = getNews();
