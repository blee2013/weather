//function for doc 
var myApi = "e955bc824015ce4d7adb84e02589ad25";
//Variables for cities 
var cityArray=["Austin"];
//if you have data in get ls, store that into cityArray, else do nothing

//When Page Loads-  3 things happen
    //Get Current City
    //Get 5 Day forecast for Current City 
    // Display list of past Cities Searched 


//1. Get Current City 

//function
function oneday(city){
    
//var API key
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    var url ="http://api.openweathermap.org/data/2.5/weather?q="+city + "&appid="+myApi;
console.log(url);

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (obj) {
        /**
         <div class="card">
            <div class="card-body">
                <p>Date</p>
                <p>
                    <img src="">
                </p>
                <p>temp</p>
                <p>Hum</p>
                <p>wind speed</p>
                <p> uv</p>
            </div>
        </div>
         */
        var d1 =$("<div>");
        d1.attr("class","card");

        var d2 = $("<div>");
        d2.attr("class", "card-body");

        //NEED HELP WITH THIS
        var p1 = $("<p>");
       

        //NEED HELP WITH THIS
        var p2 = $("<p>");
        var img = $("<img>");

        //Temp
        var p3 = $("<p>");
        p3.text(obj.main.temp);
        // $(".oneday").append(p3)
       
        //Humidity
        var p4 = $("<p>");
        p4.text(obj.main.humidity);

        //Wind Speed
        var d5 = $("<p>");
        d5.text(obj.main.speed);

        //UV & THIS ONE
        var d6 = $("<p>");
       

     
        console.log(obj.main.temp)
        console.log(obj.main.humidity)
        console.log(obj.wind.speed)
        console.log(obj.weather[0].icon)
        var lat=obj.coord.lat;
        var lon=obj.coord.lon;
        //console.log() date current time via moment js
        //http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid={API key
        var uvURL ="http://api.openweathermap.org/data/2.5/uvi?lat="+lat + "&lon="+lon + "&appid="+myApi;
        console.log(uvURL)
        $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function (uvObj) {
            console.log(uvObj.value)

        });
    });




    //use API
        //temp var
            //concat ("temp: + temp + "F")
            //append to current city div

        //humidity var
            //concat ("humidity" + humidity + "%")
            //append to current city div
        //wind speed var
            //concat ("windspeed" + windspeed + "MPH")
            //append to current city div
        //var UV Index
            //concat ("UV index" + uv index + )
            //append to cuurent city div
}

//2. 5 Day forecast for Current City 
    //function
        //var
        //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
        //dt_txt => convert to moment js format

        //for loop that iterate 5times... mult index by 8 (toget 24hrs)
    //append to current city 
    //var 5 days

    //2.5 create a renderbtn fx
        //get teh cityArray runs forloop and append the btn

//3. Display list of past Cities Searched 
    //search button ( When I click "go")
        //function to start
        //getcurrent city

        //??HOW DO I MAKE THE CITIES ON THE SIDE INTO LINKS  AFTER THEY'VE BEEN SEARCHED
        //assign past city to be buttons on left side 

        //city name sent to local stoarge

//Local Storage to get past cities



//4. when the user onclick the .cityBtn ..
//grab the btn data (city)
    //call your oneday
    //call your 5day

oneday("reno");