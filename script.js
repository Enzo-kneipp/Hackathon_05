async function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Make sure to replace with your actual API key
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.getElementById('humidity');
    const errorMessage = document.getElementById('error-message');

    try {
        // Clear any previous messages
        temperatureElement.textContent = '';
        descriptionElement.textContent = '';
        humidityElement.textContent = '';
        errorMessage.textContent = '';

        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status 200)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'City not found');
        }

        const data = await response.json();

        // Display the fetched data
        temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
        descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        errorMessage.textContent = `Error: ${error.message}`;
    }
}
