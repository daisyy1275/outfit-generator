import './App.css'
import { useEffect } from 'react'
import WadrobeForm from './components/WadrobeForm'
import generate from './utils/generateOutfit'
import OccasionSelector from './components/occasionSelector'
import WeatherDisplay from './components/WeatherDisplay'
import OutfitDisplay from './components/OutfitDisplay'
import ViewOutfits from './components/ViewOutfits'
import { useState } from 'react'
function App() {
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
      <h1> Outfit Generator </h1>
      <button onClick={() => setShowWeather(true)}>Check Weather 🌤️</button>
      {chosenFit && weather && <OutfitDisplay chosenFit={chosenFit} temp={weather.current_weather.temperature} />}
      {showWeather && weather && <WeatherDisplay weather={weather} />}
      <OccasionSelector occasion={occasion} updateOccasion={updateOccasion} onGenerate={() => updateChosenFit(generate(occasion, weather.current_weather.temperature))} />
      <div className="ticks"></div>
      <section id="spacer"></section>
      <WadrobeForm />
      <button onClick={() => setShowSaved(!showSaved)}>View Saved Outfits</button>
      {showSaved && <ViewOutfits />}
    </>
  )
}

export default App
