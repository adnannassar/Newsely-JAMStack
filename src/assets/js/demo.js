$(function () {
    // aos animation initialisation
    AOS.init({
        duration: 1000,
        once: true
    });

    // scroll header script here
    window.onscroll = function () {
        // scrollHeader();
    };
    // Get the header
    var header = $(".navbar-bottom");
    var body = $("body");

    function scrollHeader() {
        // adding sticky class
        if (window.pageYOffset > 300) {
            $(header).addClass("sticky");
        } else {
            // removing sticky class
            $(header).removeClass("sticky");
        }
    }

    // navbar toggler script
    $(".navbar-toggler").on("click", function () {
        $(".collapse").toggleClass("show");
        $("body").toggleClass("layer-open");
        // $(header).toggleClass("sticky-not");
        $(".navbar-close").show();
    });
    $(".navbar-close").on("click", function () {
        $(".collapse").toggleClass("show");
        $(".navbar-close").hide();
        $("body").toggleClass("layer-open");
        // $(header).toggleClass("sticky-not");
        $(".dark-overlay").click(function () {
            $(".collapse").removeClass("show");
            $("body").removeClass("layer-open");
        });
    });

    // $(".navbar-bottom  .navbar-nav a").on("click", function() {
    //   $(".navbar-bottom  .navbar-nav")
    //     .find("li.active")
    //     .removeClass("active");
    //   $(this)
    //     .parent("li")
    //     .addClass("active");
    // });

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 40,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 100,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });


});
$(function () {

    const businessInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const entertainmentInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const healthInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const generalInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const scienceInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const sportsInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;
    const technologyInGermany = `https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=8e39a654c4f04f038d5053f4b06214a6&pageSize=3`;


    getNewsByCategory(technologyInGermany);


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
                var categoryTitle = $(`#categoryTitle${i}`);
                var categoryDescription = $(`#categoryDescription${i}`);
                var categoryImage = $(`#categoryImage${i}`);
                var hyberLink = $(`#a${i}`);


                $(categoryTitle).html(data.articles[i].title);
                $(categoryDescription).html(data.articles[i].description);
                $(hyberLink).attr( 'href' ,data.articles[i].url);
                var url = data.articles[i].urlToImage;
                if (url === null) {
                    data.articles[i].urlToImage('src', "assets/images/mine/Newsely-images/archive-gliwice.jpg")
                } else {
                    $(categoryImage).attr('src', data.articles[i].urlToImage);
                }
            }
        });
    }
});



