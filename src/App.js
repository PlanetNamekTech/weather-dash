import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import SearchBox from './Components/SearchBox/SearchBox';

const App = () => {

  const [weather, setWeather] = useState(null);
  const [ searchQuery, setSearchQuery ] = useState("London");

  const searchWeather = (city) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city}`)
    .then(response => response.json())
    .then(data => setWeather(data))
  }
  

  useEffect(() => {
    searchWeather('London')
  }, []);


  return (
    <div className="App">
      <SearchBox search={searchQuery} searchWeather={searchWeather} setSearchQuery={setSearchQuery} />
      {weather && ( // Conditional Rendering
        <WeatherCard 
          img = {weather.current?.condition?.icon}
          location = {weather.location?.name}
          temp = {weather.current?.feelslike_f}
          condition = {weather.current.condition.text.toLowerCase()}
        />
      )}
    </div>
  );
}

export default App;
