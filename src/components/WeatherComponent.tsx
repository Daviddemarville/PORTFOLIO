import { useEffect, useState } from 'react';

const WeatherComponent = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Remplacez cette clé par celle que vous obtenez sur OpenWeatherMap
  const apiKey = '58dc0c288bdd18ff5fc1b5e237fd1a9a';
  const city = 'Metz'; // Vous pouvez modifier la ville ici

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données météorologiques');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchWeather();
  }, [apiKey, city]);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!weather) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div>
      <h2>Météo à {weather.name}</h2>
      <p>Température actuelle : {weather.main.temp}°C</p>
      <p>Condition : {weather.weather[0].description}</p>
      <p>Vent : {weather.wind.speed} m/s</p>
      <p>Humidité : {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherComponent;