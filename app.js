// API Key and Base URL for OpenWeather
const API_KEY = 'b1b9c667d04c2147edda5cb88ab5495c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const searchInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const currentLocationButton = document.getElementById('current-location-button');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const forecastContainer = document.getElementById('forecast-container');
const recentSearches = document.getElementById('recent-searches');
const recentSearchList = document.getElementById('recent-search-list');


// Event Listeners
searchButton.addEventListener('click', getWeather);
searchInput.addEventListener('keydown', (event) => {
  
    if (event.key === 'Enter') {
        getWeather();
    }
});
currentLocationButton.addEventListener('click', getCurrentLocationWeather);

// Fetch Weather Data for City Input
async function getWeather() {
    const city = searchInput.value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        const weatherResponse = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!weatherResponse.ok) throw new Error('City not found');

        const weatherData = await weatherResponse.json();
        updateWeatherUI(weatherData);
        addRecentSearch(city);

        // Fetch 5-day forecast
        const forecastResponse = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData.list);
    } catch (error) {
        alert(error.message);
    }
}



// Update Weather UI
function updateWeatherUI(data) {
    cityName.textContent = data.name; // City name
    weatherDescription.textContent = `${data.weather[0].description}, ${data.main.temp}°C`;
    
    // Set the weather icon source
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    windSpeed.textContent = `${data.wind.speed} m/s`;
    humidity.textContent = `${data.main.humidity}%`;
    pressure.textContent = `${data.main.pressure} hPa`;
}


