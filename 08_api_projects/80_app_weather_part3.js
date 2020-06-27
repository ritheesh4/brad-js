// Init weather object
const weather = new Weather('London', 'uk');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami')

function getWeather() {
    weather.getWeather()
        .then(results => {
            // let value = results.wind.speed;
            // console.log(value);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}