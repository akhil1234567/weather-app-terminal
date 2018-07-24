const request = require('request');
const argv = require('yargs').argv;


let apiKey='73af38cfcb9319b40984ae1ae3b20a21';
let city =argv.c || 'Boston'
let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function(err, response, body) {
  if (err) {
    console.log('error:', err);
  }else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
