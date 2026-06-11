import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import WadrobeForm from './components/WadrobeForm'
import generate from './utils/generateOutfit'
import OccasionSelector from './components/occasionSelector'
import WeatherDisplay from './components/WeatherDisplay'
import OutfitDisplay from './components/OutfitDisplay'
import ViewOutfits from './components/ViewOutfits'
function App() {
  const [count, setCount] = useState(0);
  const [weather, updateweather] = useState(null);
  const [chosenFit, updateChosenFit] = useState("");
  const [occasion, updateOccasion] = useState("")
  const [showWeather, setShowWeather] = useState(false)
  const [showSaved, setShowSaved] = useState(false)

  console.log(chosenFit)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true`)
       .then(response => response.json())
       .then(data => updateweather(data));
  })  
    
  }, []);

  return (
    <>
      {chosenFit && weather && <OutfitDisplay chosenFit={chosenFit} temp={weather.current_weather.temperature} />}
      <button onClick={() => setShowWeather(true)}>Check Weather 🌤️</button>
      {showWeather && weather && <WeatherDisplay weather={weather} />}
      <OccasionSelector occasion={occasion} updateOccasion={updateOccasion} />
      {weather && <button onClick={() => updateChosenFit(generate(occasion, weather.current_weather.temperature))}>Generate Outfit</button>}
      <div className="ticks"></div>
      <section id="spacer"></section>
      <WadrobeForm />
      <button onClick={() => setShowSaved(!showSaved)}>View Saved Outfits</button>
      {showSaved && <ViewOutfits />}
    </>
  )
}

export default App
