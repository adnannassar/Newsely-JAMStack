const axios = require("axios");

const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=4`;

async function getNews ()  {
    try {
        const response = await axios.get(technologyInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
