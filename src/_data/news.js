const axios = require("axios");

module.exports = async function(){
    try {
        const responce = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=1`);
        return responce.data;
    }catch(error){

        console.log(error);
    }
};
