const axios = require("axios");


const languagesArray =
    ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co',
        'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id',
        'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my',
        'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa'
        , 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];


async function getNews ()  {
   const item = languagesArray[Math.floor(Math.random() * languagesArray.length)];
    const newsURL = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=1`;
    try {
        const response = await axios.get(newsURL);
        return response.data;
    } catch (error) {

        console.log(error);
    }
};

module.exports = getNews();
