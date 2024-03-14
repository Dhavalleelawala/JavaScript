function searchWeather() {
  const searchInput = document.getElementById('search').value;
  const apiKey = 'a15240c2801d495cc4e1a800cf5d604f';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          displayWeather(data);
          console.log(data);
      })
      .catch(error => {
          console.log('Error fetching weather data:', error);
      });
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  weatherInfoDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
