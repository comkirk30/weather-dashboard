let apiKey="dc2556c07508f18009a5420cc2296743";
var pastCityButtonContainer = document.querySelector("#pastCityButtonContainer");
var currentDayCardBody = document.querySelector("#currentDayCardBody");
var currentDate = moment().format("M/D/YYYY")
var plus1DayDate = moment().add(1, 'days').format("M/D/YYYY");
var plus2DaysDate = moment().add(2, 'days').format("M/D/YYYY");
var plus3DaysDate = moment().add(3, 'days').format("M/D/YYYY");
var plus4DaysDate = moment().add(4, 'days').format("M/D/YYYY");
var plus5DaysDate = moment().add(5, 'days').format("M/D/YYYY");


var plus1DayCard = document.querySelector("#plus1DayCard")
var plus2DaysCard = document.querySelector("#plus2DaysCard")
var plus3DaysCard = document.querySelector("#plus3DaysCard")
var plus4DaysCard = document.querySelector("#plus4DaysCard")
var plus5DaysCard = document.querySelector("#plus5DaysCard")

var citiesArray = sessionStorage.getItem('citySearched') || [];

var reset = function() {

}

 $(document).ready(function () {
     //to do
     //get the city name and pass to get city
     let city="Indianapolis"
     getCity(city)
    })
function getCity(cityName){
    
    let geoApi="http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid="+apiKey;

    fetch(geoApi).then((response)=>{
        if(response.ok){
            response.json().then((data)=>{
                if(data.length>0){
                    console.log(data)
                let name =data[0].name
                let lon =data[0].lon
                let lat =data[0].lat
                getWeatherByCity(name, lat, lon)
                
                }
            });
        }
        
    })
    
}
function getWeatherByCity(cityName,lat,lon){
    // console.log (cityName)
    // console.log (lon)
    // console.log (lat)
    var weatherApi="https://api.openweathermap.org/data/2.5/onecall?lat="
    +lat+"&lon="+lon+"&limit=5&appid="+apiKey;
  //  `${baseURL}/data/2.5/onecall?lat=${cityObject.lat}&lon=${cityObject.lon}&limit=5&appid=${apiKey}&units=imperial`)
    console.log(weatherApi);
let currentDayCardBodyEl=document.getElementById("currentDayCardBody");
let currentDayCardContainerEl=document.getElementById("currentDayCardContainer");
currentDayCardContainerEl.removeAttribute("class");
    fetch(weatherApi).then((response)=>{
        if(response.ok){
            response.json().then((data)=>{
                    console.log(data)
                    let cityDisplay=document.createElement("p");
                    cityDisplay.textContent = cityName;
                    currentDayCardBodyEl.appendChild(cityDisplay);
            });
        } 
    })


citiesArray.push(searchText)
//  var pastCityButton = document.createElement("a")
//  pastCityButton.setAttribute("class", "list-group-item list-group-item-action w-100 text-center bg-secondary text-light")
//  pastCityButton.setAttribute("id", "citySearched[1]")
// pastCityButton.setAttribute("href", "#");

//         for (var i = 0; i < citiesArray.length; i++) {
//      pastCityButton.textContent = citiesArray[i]
//        pastCityButtonContainer.appendChild(pastCityButton);
//     }

//      var citySearched = sessionStorage.getItem('citySearched')



    var cityNameEl = document.createElement('h5');
    cityNameEl.setAttribute("class", "card-title text-left city date fw-bold");
    cityNameEl.setAttribute("id", "cityName");
    cityNameEl.textContent = searchText + " (" + currentDate + ")";
    currentDayCardBody.appendChild(cityNameEl);

    var cityTempTodayEl = document.createElement('p');
    cityTempTodayEl.setAttribute("class", "card-text text-left tempCardInfo");
    cityTempTodayEl.setAttribute("id", "cityTempToday");
    cityTempTodayEl.innerHTML = "Temp: " + data.current.temp;
    currentDayCardBody.appendChild(cityTempTodayEl);

    var cityWindTodayEl = document.createElement('p');
    cityWindTodayEl.setAttribute("class", "card-text text-left windCardInfo");
    cityWindTodayEl.setAttribute("id", "cityWindToday");
    cityWindTodayEl.innerHTML = "Wind: " + data.current.wind_speed + " MPH";
    currentDayCardBody.appendChild(cityWindTodayEl);

    var cityHumidityTodayEl = document.createElement('p');
    cityHumidityTodayEl.setAttribute("class", "card-text text-left humidityCardInfo");
    cityHumidityTodayEl.setAttribute("id", "cityHumidityToday");
    cityHumidityTodayEl.innerHTML = "Humidity: " + data.current.humidity + "%";
    currentDayCardBody.appendChild(cityHumidityTodayEl);

    var cityUVIndexTodayEl = document.createElement('p');
    cityUVIndexTodayEl.setAttribute("class", "card-text text-left uVIndexCardInfo");
    cityUVIndexTodayEl.setAttribute("id", "cityUVIndexToday");
    cityUVIndexTodayEl.innerHTML = "UV Index: " + data.current.uvi;
    currentDayCardBody.appendChild(cityUVIndexTodayEl);


    var datePlus1 = document.createElement("h5");
    datePlus1.setAttribute("class", "card-title text-light text-left date");
    datePlus1.innerHTML = plus1DayDate;
    plus1DayCard.appendChild(datePlus1);

    // create image icon for Day +1 Card
    var iconPlus1DayEl = document.createElement('img')
    var iconPlus1DayCode = data.daily[1].weather[0].icon
    iconPlus1DayEl.src = "http://openweathermap.org/img/w/" + iconPlus1DayCode + ".png";
    plus1DayCard.appendChild(iconPlus1DayEl);
    
    //  Temp for Day +1 Card
    var datePlus1Temp = document.createElement('p');
    datePlus1Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
    datePlus1Temp.setAttribute("id", "cityTempToday");
    datePlus1Temp.innerHTML = "Temp: " + data.daily[1].temp.day;
    plus1DayCard.appendChild(datePlus1Temp);

    //  Wind for Day +1 Card
    var datePlus1Wind = document.createElement('p');
    datePlus1Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
    datePlus1Wind.setAttribute("id", "cityWindToday");
    datePlus1Wind.innerHTML = "Wind: " + data.daily[1].wind_speed + " MPH";
    plus1DayCard.appendChild(datePlus1Wind);

    //  Humidity for Day +1 Card
    var datePlus1Humidity = document.createElement('p');
    datePlus1Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
    datePlus1Humidity.setAttribute("id", "cityHumidityToday");
    datePlus1Humidity.innerHTML = "Humidity: " + data.daily[1].humidity + "%";
    plus1DayCard.appendChild(datePlus1Humidity);




    // create h5 date for Day +2
    var datePlus2 = document.createElement("h5");
    datePlus2.setAttribute("class", "card-title text-light text-left date");
    datePlus2.innerHTML = plus2DaysDate;
    plus2DaysCard.appendChild(datePlus2);

    // create image icon for Day +2 Card
    var iconPlus2DaysEl = document.createElement('img')
    var iconPlus2DaysCode = data.daily[2].weather[0].icon
    iconPlus2DaysEl.src = "http://openweathermap.org/img/w/" + iconPlus2DaysCode + ".png";
    plus2DaysCard.appendChild(iconPlus2DaysEl);
    
    //  Temp for Day +2 Card
    var datePlus2Temp = document.createElement('p');
    datePlus2Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
    datePlus2Temp.setAttribute("id", "cityTempToday");
    datePlus2Temp.innerHTML = "Temp: " + data.daily[2].temp.day;
    plus2DaysCard.appendChild(datePlus2Temp);

    //  Wind for Day +2 Card
    var datePlus2Wind = document.createElement('p');
    datePlus2Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
    datePlus2Wind.setAttribute("id", "cityWindToday");
    datePlus2Wind.innerHTML = "Wind: " + data.daily[2].wind_speed + " MPH";
    plus2DaysCard.appendChild(datePlus2Wind);

    // Humidity for Day +2 Card
    var datePlus2Humidity = document.createElement('p');
    datePlus2Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
    datePlus2Humidity.setAttribute("id", "cityHumidityToday");
    datePlus2Humidity.innerHTML = "Humidity: " + data.daily[2].humidity + "%";
    plus2DaysCard.appendChild(datePlus2Humidity);



    // create h5 date for Day +3
    var datePlus3 = document.createElement("h5");
    datePlus3.setAttribute("class", "card-title text-light text-left date");
    datePlus3.innerHTML = plus3DaysDate;
    plus3DaysCard.appendChild(datePlus3);

    // create image icon for Day +3 Card
    var iconPlus3DaysEl = document.createElement('img')
    var iconPlus3DaysCode = data.daily[3].weather[0].icon
    iconPlus3DaysEl.src = "http://openweathermap.org/img/w/" + iconPlus3DaysCode + ".png";
    plus3DaysCard.appendChild(iconPlus3DaysEl);
    
    //  Temp for Day +3 Card
    var datePlus3Temp = document.createElement('p');
    datePlus3Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
    datePlus3Temp.setAttribute("id", "cityTempToday");
    datePlus3Temp.innerHTML = "Temp: " + data.daily[3].temp.day;
    plus3DaysCard.appendChild(datePlus3Temp);

    // c Wind for Day +3 Card
    var datePlus3Wind = document.createElement('p');
    datePlus3Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
    datePlus3Wind.setAttribute("id", "cityWindToday");
    datePlus3Wind.innerHTML = "Wind: " + data.daily[3].wind_speed + " MPH";
    plus3DaysCard.appendChild(datePlus3Wind);

    //  Humidity for Day +3 Card
    var datePlus3Humidity = document.createElement('p');
    datePlus3Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
    datePlus3Humidity.setAttribute("id", "cityHumidityToday");
    datePlus3Humidity.innerHTML = "Humidity: " + data.daily[3].humidity + "%";
    plus3DaysCard.appendChild(datePlus3Humidity);


    
    // create h5 date for Day +4
    var datePlus4 = document.createElement("h5");
    datePlus4.setAttribute("class", "card-title text-light text-left date");
    datePlus4.innerHTML = plus4DaysDate;
    plus4DaysCard.appendChild(datePlus4);

    // create image icon for Day +4 Card
    var iconPlus4DaysEl = document.createElement('img')
    var iconPlus4DaysCode = data.daily[4].weather[0].icon
    iconPlus4DaysEl.src = "http://openweathermap.org/img/w/" + iconPlus4DaysCode + ".png";
    plus4DaysCard.appendChild(iconPlus4DaysEl);
    
    // Temp for Day +4 Card
    var datePlus4Temp = document.createElement('p');
    datePlus4Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
    datePlus4Temp.setAttribute("id", "cityTempToday");
    datePlus4Temp.innerHTML = "Temp: " + data.daily[4].temp.day;
    plus4DaysCard.appendChild(datePlus4Temp);

    //  Wind for Day +4 Card
    var datePlus4Wind = document.createElement('p');
    datePlus4Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
    datePlus4Wind.setAttribute("id", "cityWindToday");
    datePlus4Wind.innerHTML = "Wind: " + data.daily[4].wind_speed + " MPH";
    plus4DaysCard.appendChild(datePlus4Wind);

    //  Humidity for Day +4 Card
    var datePlus4Humidity = document.createElement('p');
    datePlus4Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
    datePlus4Humidity.setAttribute("id", "cityHumidityToday");
    datePlus4Humidity.innerHTML = "Humidity: " + data.daily[4].humidity + "%";
    plus4DaysCard.appendChild(datePlus4Humidity);



    // create h5 date for Day +5
    var datePlus5 = document.createElement("h5");
    datePlus5.setAttribute("class", "card-title text-light text-left date");
    datePlus5.innerHTML = plus5DaysDate;
    plus5DaysCard.appendChild(datePlus5);

    // create image icon for Day +5 Card
    var iconPlus5DaysEl = document.createElement('img')
    var iconPlus5DaysCode = data.daily[5].weather[0].icon
    iconPlus5DaysEl.src = "http://openweathermap.org/img/w/" + iconPlus5DaysCode + ".png";
    plus5DaysCard.appendChild(iconPlus5DaysEl);
    
    //  Temp for Day +5 Card
    var datePlus5Temp = document.createElement('p');
    datePlus5Temp.setAttribute("class", "card-text text-light text-left tempCardInfo");
    datePlus5Temp.setAttribute("id", "cityTempToday");
    datePlus5Temp.innerHTML = "Temp: " + data.daily[5].temp.day;
    plus5DaysCard.appendChild(datePlus5Temp);

    //  Wind for Day +5 Card
    var datePlus5Wind = document.createElement('p');
    datePlus5Wind.setAttribute("class", "card-text text-light text-left windCardInfo");
    datePlus5Wind.setAttribute("id", "cityWindToday");
    datePlus5Wind.innerHTML = "Wind: " + data.daily[5].wind_speed + " MPH";
    plus5DaysCard.appendChild(datePlus5Wind);

    //  Humidity for Day +5 Card
    var datePlus5Humidity = document.createElement('p');
    datePlus5Humidity.setAttribute("class", "card-text text-light text-left humidityCardInfo");
    datePlus5Humidity.setAttribute("id", "cityHumidityToday");
    datePlus5Humidity.innerHTML = "Humidity: " + data.daily[5].humidity + "%";
    plus5DaysCard.appendChild(datePlus5Humidity);

  });
})


});
})


}


    var api="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=dc2556c07508f18009a5420cc2296743";
    let geoApi="http://api.openweathermap.org/geo/1.0/direct?q=Indianapolis&limit=5&appid=dc2556c07508f18009a5420cc2296743";