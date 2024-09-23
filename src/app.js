// src/app.js
import { getWeather } from './services/apiService.js';

const weatherForm = document.getElementById('weather-form');
const weatherResult = document.getElementById('weather-result');

// Event listener for form submission
weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get the city from input field
    const cityInput = document.getElementById('city-input').value;

    try {
        // Fetch weather data
        const weatherData = await getWeather(cityInput);
        
        // Display the weather information
        displayWeather(weatherData);
    } catch (error) {
        weatherResult.innerHTML = `<p>Could not retrieve weather data. Please try again.</p>`;
    }
});

// Function to display the weather information
function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}