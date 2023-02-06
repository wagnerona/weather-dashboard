let cities = [];

// Retrieve the cities array from local storage
if (localStorage.getItem("cities")) {
    cities = JSON.parse(localStorage.getItem("cities"));
}

function displayCityInfo(city) {

    // Add your own API key between the ""
    let APIKey = "166a433c57516f51dfab1f7edaed8413";

    // let city = city

    // console.log(city);

    // Here we are building the URL we need to query the database
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey;
    let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + APIKey;




    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(queryURL);
        // console.log(response)
        // console.log(response.main.temp)
        // console.log(response.wind.speed)
        // console.log(response.main.humidity)
        //Remove this for comments 

        //clear data before appending 
        $('#today').empty();

        let cityDiv = $('<div class="city main-card">')

        let cityName = $('<h1>').text(city + (moment().format('[ ]D/M/YYYY')));
        cityDiv.append(cityName);

        let currentIcon = response.weather[0].icon
        let weatherIcon = $('<img>').attr('src', "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png")
        cityDiv.append(weatherIcon)

        let temp = response.main.temp
        let pOne = $('<p>').text('Temperature: ' + temp + " °C")
        cityDiv.append(pOne)

        let wind = response.wind.speed
        let pTwo = $('<p>').text('Wind: ' + wind + " KPH")
        cityDiv.append(pTwo)

        let humidity = response.main.humidity
        let pThree = $('<p>').text('Humidity: ' + humidity + " %")
        cityDiv.append(pThree)

        $('#today').append(cityDiv);

    });



    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    }).then(function (response) {
        console.log(fiveDayUrl)
        $('#forecast').empty();
        for (i = 5; i < response.list.length; i += 8) {

            let futureDate = $('<h5>' + moment.unix(response.list[i + 1].dt).format('D/M/YYYY') + '<h5>');

            let futureIcon = response.list[i].weather[0].icon
            let futureWeatherIcon = $('<img>').attr('src', "http://openweathermap.org/img/wn/" + futureIcon + "@2x.png")

            let futureTemp = $('<div>' + 'Temp: ' + response.list[i].main.temp + " °C" + '<div>');

            let futureWind = $('<div>' + 'Wind: ' + response.list[i].wind.speed + " KPH" + '<div>');

            let futureHumidity = $('<div>' + 'Humidity: ' + response.list[i].main.humidity + " %" + '<div>');

            let weatherCard = $('<div>').addClass('card').appendTo('#forecast');
            let weatherCardInfo = $('<div>').addClass('card-info').appendTo(weatherCard);

            $(futureDate).addClass('card-title').appendTo(weatherCardInfo)
            $(futureWeatherIcon).addClass('card-icon').appendTo(weatherCardInfo)
            $(futureTemp).addClass('card-title').appendTo(weatherCardInfo)
            $(futureWind).addClass('card-title').appendTo(weatherCardInfo)
            $(futureHumidity).addClass('card-title').appendTo(weatherCardInfo)




        }

    });
};


function renderButtons() {

    const cityContainer = $('#history');

    cityContainer.empty();


    cities.forEach(function (city) {
        const cityButton = $('<button>');
        cityButton.text(city);
        cityButton.addClass("city-button btn btn-secondary mt-2")
        cityButton.attr("data-city", city)
        cityContainer.append(cityButton);


    })

}

// This function handles events where one button is clicked
$("#search-button").on("click", function (event) {


    event.preventDefault();
    //  $('buttons-view').add('<button>').addClass('movieName')
    const newCity = $("#search-input").val();

    if (!cities.includes(newCity)) {

        cities.push(newCity);
        console.log(newCity);

        renderButtons();

        displayCityInfo(newCity)
    } else {
        displayCityInfo(newCity)
    }
    localStorage.setItem("cities", JSON.stringify(cities));

    // $('#search-input').text.empty()
});


// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".city-button", function () {
    displayCityInfo($(this).attr("data-city"))
});


// Calling the renderButtons function to display the initial list of movies
renderButtons();

// Function to clear history
$('#clear-button').on('click', function () {
    localStorage.clear();
    location.reload();
})
