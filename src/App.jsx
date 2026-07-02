import { Routes, Route, Link } from 'react-router-dom'
import SavedOutfitsPage from './components/SavedOutfitsPage'
import { useState, useEffect } from 'react'
import './App.css'
import WadrobeForm from './components/WadrobeForm'
import generate from './utils/generateOutfit'
import OccasionSelector from './components/occasionSelector'
import WeatherDisplay from './components/WeatherDisplay'
import OutfitDisplay from './components/OutfitDisplay'
import ViewOutfits from './components/ViewOutfits'
import WardrobeList from './components/WardrobeList'

function App() {
  const [weather, updateweather] = useState(null);
  const [chosenFit, updateChosenFit] = useState("");
  const [occasion, updateOccasion] = useState("")
  const [showWeather, setShowWeather] = useState(false)
  const [showSaved, setShowSaved] = useState(false)
  const [showWardrobe, setShowWardrobe] = useState(false)
  const [showOutfit, setShowOutfit] = useState(false);

  console.log(chosenFit)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true`)
       .then(response => response.json())
       .then(data => updateweather(data));
  })  
    
  }, []);
  console.log("weather temp:", weather?.current_weather?.temperature)
  console.log("occasion:", occasion) 

  return (
  <Routes>
    <Route path="/" element={
      <>
        <p style={{letterSpacing: '3px', fontSize: '12px', color: '#9b4dca'}}>✦ YOUR PERSONAL STYLIST ✦</p>
        <h1>Outfit Generator</h1>
        <p style={{color: '#9b4dca', fontSize: '14px'}}>dress well everyday</p>
        <button onClick={() => setShowWeather(!showWeather)}>Check Weather 🌤️</button>
        {chosenFit && weather && <OutfitDisplay chosenFit={chosenFit} temp={weather.current_weather.temperature} onReset={() => updateChosenFit("")} />}
        {showWeather && weather && <WeatherDisplay weather={weather} />}
        <WadrobeForm />
        <OccasionSelector occasion={occasion} updateOccasion={updateOccasion} onGenerate={() => updateChosenFit(generate(occasion, weather.current_weather.temperature))} />
        <button onClick={() => setShowWardrobe(!showWardrobe)}>👚 View My Wardrobe</button>
        {showWardrobe && <WardrobeList />}
        <Link to="/saved"><button>View Saved Outfits</button></Link>
      </>
    } />
    <Route path="/saved" element={<SavedOutfitsPage />} />
  </Routes>
)
}

export default App
