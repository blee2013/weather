function searchedCity() {

var cityArray = [];

var citySearch= document.querySelector("#city-search");
var cityEl = document.querySelector("#city");
var currentForecast = document.querySelector("#current-forecast");
var searchedCityEl = document.querySelector("#searched-city");
var forcastTitle =document.querySelector("#forecast");
var fiveDayEl = document.querySelector("#five-day-forecast");
var pastSearchedBtnEl = document.querySelector("#past-searched-btn");


var  submitCityForm  = function (event) {
    event.preventDefault();
    var city = cityEl.value.trim();
    if (city) {
        getWeather(city);
        getFiveDay(city);
        cities.unshift({city});
        cityEl.value = "";
    } else {
        alert("Please enter a City");
    }
    saveSearch();
    pastSearch(city);
}

var saveSearch = function () {
    localStorage.setItem("cities", JSON.stringify(cities));
};

//1. Get Current City 

var getWeather = function(city){
    //var API key
    var myApi = "e955bc824015ce4d7adb84e02589ad25";
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + myApi;
    console.log(apiURL);

    fetch(url)
    .then(function(obj){
        obj.json().then(function(data){
            displayWeather(data,city);
        });
    });
};

var displayWeather= function(weather, searchCity){
    //clear content
    weataherContainerEl.textContent="";
    searchedCityEl.textContent=searchCity
    console.log(weather);   



    
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (obj) {
            console.log(obj);

//         var d1 =document.createElement("div");
//         d1.setAttribute("class","card");
//         searchedCityEl.appendChild(d1);

//         var d2 = document.createElement("div");
//         d2.setAttribute("class", "card-body");
//         searchedCityEl.appendChild(d2);


        //date
        var p1 = document.createElement("p");
        p1.textContent= ")";
        searchedCityEl.appendChild(p1);
        currentForecast.appendChild(p1);

       
        //image
        var img = document.createElement("img");
        img.setAttribute("src", "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png");
        searchedCityEl.appendChild(img);

        //Temp
        var p3 = document.createElement("p");
        p3.textContent = "Temperature:" + obj.main.temp + " °F";
        searchedCityEl.appendChild(p3);
        currentForecast.appendChild(p3);

        //Humidity
        var p4 = document.createElement("p");
        p4.textContent= "Humidity:" + obj.main.humidity + "%";
        searchedCityEl.appendChild(p4);
        currentForecast.appendChild(p4);


        //Wind Speed
        var p5 = document.createElement("p");
        p5.textContent="Wind Speed:" +obj.main.speed + "MPH";
        searchedCityEl.appendChild(p5);
        currentForecast.appendChild(p5);


        
        //long & lat for UV
        var lat = obj.coord.lat;
        var lon = obj.coord.lon;
        getUvEl(lat,lon)
})
var getUvEl= function(lat,lon){
    var myApi = "e955bc824015ce4d7adb84e02589ad25"
    // http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key
    var apiURL ="http://api.openweathermap.org/data/2.5/uvi?lat="+lat + "&lon="+lon + "&appid="+myApi;
    fetch(apiURL)
        .then(function (response) {
            obj.json().then(function (data) {
                displayUvEl(data)
                // console.log(data)
            });
        });
}


    var displayUvEl= function(index){
        var uvIndexEl= document.createElement("div");
        uvIndexEl.textContent= "UV Index:"
        uvIndexEl.classList="group-list-item"

        uvIndexValue=document.createElement("p")
        uvIndexValue.textContent=index.value

        if (index.value <= 2) {
            uvIndexValue.classList = "favorable"
        } else if (index.value > 2 && index.value <= 8) {
            uvIndexValue.classList = "moderate "
        }
        else if (index.value > 8) {
            uvIndexValue.classList = "danger"
        };
        uvIndexEl.appendChild(uvIndexValue);
        currentForecast.appendChild(uvIndexEl);
    }

    var getFiveDayWeather = function(city){
        var myApi = "e955bc824015ce4d7adb84e02589ad25"
            //http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key
        var url = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + myApi;
        // console.log(url)

        fetch(url)
        .then(function(obj){
            obj.json().then(function(data){
                displayFiveDayWeather(data);
            });
        });
    };
}}
// function getFiveDayWeather() {

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (obj) {
        console.log(obj);

    var displayFiveDayWeather = function(weather){
        getFiveDayForecast.textContent=""
        forecastTitle.textContent="5-Day Forecast:";

        var forecast= weather.list;
        for(var i=5; i <forecast.length; i=i+8){
            var dayForecast=  forecast[i];

            var forecastEl=document.createElement("div");
            forecastEl.classList = "card bg-primary text-light m-3";

            // console.log(dayForecast)
        
        //date
        var p8 = document.createElement("p");
        p8.textContent = " (" + moment(weather.dt.value).format("MMM D, YYYY") + ")";
        forecastFive.appendChild(p8);
        forecastFiveEl.appendChild(p8);

        //image
        var img = document.createElement("img");
        img.setAttribute("src", "http://openweathermap.org/img/w/" + dayForecast.weather[0].icon + ".png");
        searchedCityEl.appendChild(img);

        //Temp
        var p9 = document.createElement("p");
        p9.textContent = "Temperature:" + obj.main.temp + " °F";
        forecastFive.appendChild(p9);
        forecastFiveEl.appendChild(p9);

        //Humidity
        var p10 = document.createElement("p");
        p10.textContent = "Humidity:" + obj.main.humidity + "%";
        forecastFive.appendChild(p10);
        forecastFiveEl.appendChild(p10);


        //Wind Speed
        var p11 = document.createElement("p");
        p11.textContent = "Wind Speed:" + obj.main.speed + "MPH";
        forecastFivee.appendChild(p11);
        forecastFiveEl.appendChild(p11);
        }
    }

    var pastSearch= function (pastSearch) {

        // console.log(pastSearcheeCity)

        pastSearchEl = document.createElement("button");
        pastSearchEl.textContent = pastSearch;
        pastSearchEl.classList = "d-flex w-100 btn-light border p-2";
        pastSearchEl.setAttribute("data-city", pastSearch)
        pastSearchEl.setAttribute("type", "submit");

        pastSearchedBtnEl.prepend(pastSearchedCityEl);
    }


    var pastSearchHandler = function (event) {
        var city = event.target.getAttribute("data-city")
        if (city) {
            getWeather(city);
            getFiveDayWeather(city);s
        }
    }

        // pastSearch();
    
        citySearch.addEventListener("submit", submitCityForm);
        pastSearchedBtnEl.addEventListener("click", pastSearchHandler);
})


searchedCity();
// getFiveDayWeather();