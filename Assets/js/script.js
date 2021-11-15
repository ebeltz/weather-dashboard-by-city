// Create a function to assign all the ids to elements
function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-picture");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday");
    var todaysweatherEl = document.getElementById("todays-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    // variable with an unique API key
    const APIKey = "a59d99918a5516eb67c62353da0fcff4";

    function getWeather(cityName) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL).then(function(response) {
            todaysweatherEl.classList.remove("d-none");
        })
    }
}
