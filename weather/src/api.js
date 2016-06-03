var _ = require('lodash');
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=ac6707379a8b0c658ae10abd6555e347'

var KelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.5) * 1.8 + 32) + ' ˚F'
}
module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: KelvinToF(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    });
}