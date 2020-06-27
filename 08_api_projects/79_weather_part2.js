class Weather {
    constructor(city, state) {
        this.apiKey = '50fa63a7f93c025626b511d658966940';
        this.city = city;
        this.state = state;
    }


    // Getch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = await response.json();
        return responseData.weather;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}