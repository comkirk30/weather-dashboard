let apiKey = "dc2556c07508f18009a5420cc2296743";
var pastCityButtonContainer = document.querySelector(
  "#pastCityButtonContainer"
);

var citySearchInput = document.querySelector('#citySearchTextarea');
var searchBtn = document.querySelector('#search-btn');

var currentDayCardBody = document.querySelector("#currentDayCardBody");
var currentDate = moment().format("M/D/YYYY");
var plus1DayDate = moment().add(1, "days").format("M/D/YYYY");
var plus2DaysDate = moment().add(2, "days").format("M/D/YYYY");
var plus3DaysDate = moment().add(3, "days").format("M/D/YYYY");
var plus4DaysDate = moment().add(4, "days").format("M/D/YYYY");
var plus5DaysDate = moment().add(5, "days").format("M/D/YYYY");

var plus1DayCard = document.querySelector("#plus1DayCard");
var plus2DaysCard = document.querySelector("#plus2DaysCard");
var plus3DaysCard = document.querySelector("#plus3DaysCard");
var plus4DaysCard = document.querySelector("#plus4DaysCard");
var plus5DaysCard = document.querySelector("#plus5DaysCard");

var citiesArray = sessionStorage.getItem("citySearched") || [];

var reset = function () {};


searchBtn.addEventListener('click', function(){
 let city = citySearchInput.value;
 reset();
  getCity(city);
})
// $(document).ready(function () {
//   //to do
//   //get the city name and pass to get city
//   let city = citySearchInput.value;
//   getCity(city);
// });




function getCity(cityName) {
  let geoApi =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=5&appid=" +
    apiKey;

  fetch(geoApi).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        if (data.length > 0) {
          console.log(data);
          let name = data[0].name;
          let lon = data[0].lon;
          let lat = data[0].lat;
       
          getWeatherByCity(name, lat, lon);
        }
      });
    }
  });
};

function getWeatherByCity(cityName, lat, lon) {
  var weatherApi =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&limit=5&appid=" +
    apiKey +
    "&units=imperial";

  console.log("Api", weatherApi);

  let currentDayCardBodyEl = document.getElementById("currentDayCardBody");
  let currentDayCardContainerEl = document.getElementById(
    "currentDayCardContainer"
  );
  currentDayCardContainerEl.removeAttribute("class");

  fetch(weatherApi).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);

        let dateDisplay = document.createElement("p");
        dateDisplay.textContent = formatUnixTimeStamp(data.current.dt);

        let cityDisplay = document.createElement("p");
        cityDisplay.textContent = cityName;

        let tempDisplay = document.createElement("p");
        tempDisplay.textContent = "Temp: " + data.current.temp;

        let weatherDisplay = document.createElement("img");
        weatherDisplay.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`
        );

        //Add Humidity
        //Add UV
        currentDayCardBodyEl.append(
          dateDisplay,
          weatherDisplay,
          cityDisplay,
          tempDisplay
        );

        getFiveDaysForecastByCity(data.daily.slice(1, 6));
      });
    }
  });
};

function getFiveDaysForecastByCity(fiveDayWeather) {
  let fiveDayForecastContainerEl = document.getElementById(
    "fiveDayForecastContainer"
  );

  console.log("fiveDayWeather", fiveDayWeather);

  for (let i = 0; i < fiveDayWeather.length; i++) {
    let individualDiv = document.createElement("div");
    individualDiv.setAttribute(
      "class",
      "m-2 w-auto mx-auto text-left card border-primary card-body"
    );

    let dateDisplay = document.createElement("p");
    dateDisplay.textContent = formatUnixTimeStamp(fiveDayWeather[i].dt);

    let tempDisplay = document.createElement("p");
    tempDisplay.textContent = fiveDayWeather[i].temp.day;

    let weatherDisplay = document.createElement("img");
    weatherDisplay.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${fiveDayWeather[i].weather[0].icon}.png`
    );
    //weatherIcon
    //Wind
    //Humidity

    individualDiv.append(dateDisplay, weatherDisplay, tempDisplay);

    fiveDayForecastContainerEl.append(individualDiv);
  }
}

function formatUnixTimeStamp(unixTime) {
  const date = new Date(unixTime * 1000);
  return date.toLocaleDateString("en-US");
}
