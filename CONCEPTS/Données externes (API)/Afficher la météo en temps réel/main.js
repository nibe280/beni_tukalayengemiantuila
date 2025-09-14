const key = "DEMO_KEY"; // ⚠️ Mets ta clé OpenWeather ici
const btn = document.getElementById("search");
const cityInput = document.getElementById("city");
const weatherDiv = document.getElementById("weather");

btn.addEventListener("click", async () => {
  const city = cityInput.value;
  if (!city) return;
  weatherDiv.textContent = "⏳ Chargement...";

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=fr`);
    const data = await res.json();
    weatherDiv.innerHTML = `🌍 ${data.name}<br>🌡️ ${data.main.temp}°C<br>☁️ ${data.weather[0].description}`;
  } catch {
    weatherDiv.textContent = "❌ Erreur lors de la récupération";
  }
});
