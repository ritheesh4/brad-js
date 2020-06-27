class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-dec');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLIke = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        // this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp;
        this.humidity.textContent = ` Relative Humidity: ${weather.main.humidity}`;
        // this.feelsLIke.textContent = `Feels like :${weather.results.weather[0].description}`;
        this.wind.textContent = `Wind: Speed${weather.wind.speed} deg:${weather.wind.deg}`
        // this.icon.setAttribute('src',)
    }
}