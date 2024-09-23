const apiKey = '3dd573e70c7dacd2f93e7116e6fec136'; // Replace with your actual API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    try {
        const response = await fetch(`${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather'); // Make sure you have an element with this ID in your HTML
    weatherContainer.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
    `;
}