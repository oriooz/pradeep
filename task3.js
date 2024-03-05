angular.module('weatherApp', [])
  .controller('WeatherController', function($http) {
    var apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=' + apiKey;

    var vm = this;
    vm.weatherData = {};

    $http.get(apiUrl)
      .then(function(response) {
        vm.weatherData.city = response.data.name;
        vm.weatherData.temperature = response.data.main.temp;
        vm.weatherData.description = response.data.weather[0].description;
        vm.weatherData.humidity = response.data.main.humidity;
        vm.weatherData.iconCode = response.data.weather[0].icon;
        vm.weatherData.iconUrl = 'http://openweathermap.org/img/w/' + vm.weatherData.iconCode + '.png';
      })
      .catch(function(error) {
        console.log("Error fetching weather data:", error);
      });
  });
