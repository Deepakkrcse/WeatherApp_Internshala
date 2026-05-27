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


