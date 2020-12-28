$(function () {


    const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const generalInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const scienceInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const sportsInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;


    getNewsByCategory(sportsInGermany);


    $("#Unternehmen").on('click', () => {
        getNewsByCategory(businessInGermany);
    });
    $("#Unterhaltung").on('click', () => {
        getNewsByCategory(entertainmentInGermany);
    });
    $("#Gesundheit").on('click', () => {
        getNewsByCategory(healthInGermany);
    });
    $("#Allgemeines").on('click', () => {
        getNewsByCategory(generalInGermany)
    });
    $("#Wissenschaft").on('click', () => {
        getNewsByCategory(scienceInGermany);
    });
    $("#Sport").on('click', () => {
        getNewsByCategory(sportsInGermany);
    });
    $("#Technologie").on('click', () => {

        getNewsByCategory(technologyInGermany);
    });


    function getNewsByCategory(categoryName) {

        $.getJSON(categoryName, function (data) {

            let i;
            for (i = 0; i < 3; i++) {
                const categoryTitle = $(`#categoryTitle${i}`);
                const categoryDescription = $(`#categoryDescription${i}`);
                const categoryImage = $(`#categoryImage${i}`);
                const hyperLink = $(`#a${i}`);
                $(categoryTitle).html(data.articles[i].title);
                $(categoryDescription).html(data.articles[i].description);
                $(hyperLink).attr('href', data.articles[i].url);

                if (data.articles[i].urlToImage == null) {
                    $(categoryImage).attr('src', "assets/images/mine/Newsely-images/archive-gliwice.jpg");
                } else {
                    $(categoryImage).attr('src', data.articles[i].urlToImage);
                }
            }
        });
    }
});


/*
$(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "555749c81fmshdd553c66e88d153p1e2ef6jsn90a6df14acbe",
            "x-bingapis-sdk": "true"
        }

    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});
 */
