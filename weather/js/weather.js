$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      showPosition(position);
      getWeather(position);
    });
  }

  function showPosition(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  }

  function getWeather(position) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=44db6a862fba0b067b1930da0d769e98", function(json) {
      console.log(json);
      console.log(json.weather);
      console.log(json.weather[0].description);
      console.log(json.weather[0].icon);
      console.log(json.main.temp);
      console.log(json.weather[0].main);

      console.log("http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");

      //Thunderstorm
      //Drizzle
      //Rain
      //Snow
      //Atmosphere
      //Clouds
      //Extreme
    });
  }
});
