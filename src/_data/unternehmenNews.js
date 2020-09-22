const axios = require("axios");

const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=6`;

async function getNews ()  {
    try {
        const response = await axios.get(businessInGermany);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
module.exports = getNews();
