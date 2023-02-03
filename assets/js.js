let cities = [];


function displayCityInfo() {
// Add your own API key between the ""
let APIKey = "166a433c57516f51dfab1f7edaed8413";

let city = $(this).attr('data-city')

console.log(city);
// Here we are building the URL we need to query the database
// let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey;



}







function renderButtons() {

    const cityContainer = $('#history');

    cityContainer.empty();

    cities.forEach(function (city) {
        const cityButton = $('<button>');
        cityButton.text(city);
        cityButton.addClass("city-button")
        cityButton.attr("data-city", city)
        cityContainer.append(cityButton);


    })

}

 // This function handles events where one button is clicked
$("#search-button").on("click", function(event) {

    event.preventDefault();
    //  $('buttons-view').add('<button>').addClass('movieName')
    const newCity = $("#search-input").val();
    
    cities.push(newCity);
  
    renderButtons();
  
   });
  

   // Adding a click event listener to all elements with a class of "movie-btn"
    $(document).on("click", ".city-button", displayCityInfo);


   // Calling the renderButtons function to display the initial list of movies
   renderButtons();