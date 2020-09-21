const axios = require("axios");


const languagesArray =
    ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co',
        'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id',
        'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my',
        'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa'
        , 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

//const newsByLanguages = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=1`;


// general  science sports technology
const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=8e39a654c4f04f038d5053f4b06214a6`;
const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=8e39a654c4f04f038d5053f4b06214a6`;
const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;

async function getNews ()  {
   const item = languagesArray[Math.floor(Math.random() * languagesArray.length)];

    try {
        const response = await axios.get(healthInGermany);
        return response.data;
    } catch (error) {

        console.log(error);
    }
};





module.exports = getNews();
