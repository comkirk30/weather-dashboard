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
     getCity()
    })
function getCity(){
    let geoApi="http://api.openweathermap.org/geo/1.0/direct?q=Indianapolis&limit=5&appid=dc2556c07508f18009a5420cc2296743";

    fetch(geoApi).then((response)=>{
        if(response.ok){
            response.json().then((data)=>{
                if(data.length>0){
                    console.log(data)
                }
            });
        }
        
    })
    
}

// citiesArray.push(searchText)
//    var pastCityButton = document.createElement("a")
//     pastCityButton.setAttribute("class", "list-group-item list-group-item-action w-100 text-center bg-secondary text-light")
//     pastCityButton.setAttribute("id", "citySearched[1]")
//     pastCityButton.setAttribute("href", "#");

//     for (var i = 0; i < citiesArray.length; i++) {
//         pastCityButton.textContent = citiesArray[i]
//         pastCityButtonContainer.appendChild(pastCityButton);
//     }

//     var citySearched = sessionStorage.getItem('citySearched')

    var api="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=dc2556c07508f18009a5420cc2296743";
    let geoApi="http://api.openweathermap.org/geo/1.0/direct?q=Indianapolis&limit=5&appid=dc2556c07508f18009a5420cc2296743";