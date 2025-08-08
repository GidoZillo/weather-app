const apiKey = "20371738f9534ca200ac3d879ea08cf1"; // Replace this with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("weatherResult").classList.remove("hidden");
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = `🌡️ Temp: ${data.main.temp}°C`;
      document.getElementById("description").innerText = `📋 Weather: ${data.weather[0].description}`;
      document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
