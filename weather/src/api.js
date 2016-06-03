var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=ac6707379a8b0c658ae10abd6555e347'

module.exports = function(latitude, longtitude) {
  var url = '${rootUrl}&lat=${latitude}&lon=${longtitude}'
}