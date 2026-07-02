import { Link } from 'react-router-dom'
import ViewOutfits from './ViewOutfits'

function SavedOutfitsPage() {
  return (
    <div>
      <Link to="/"><button>← Back home</button></Link>
      <h1 style={{fontSize: '2rem'}}>My Outfit Closet</h1>
      <p style={{color: '#9b4dca', fontSize: '14px'}}>Your saved looks, all in one place</p>
      <ViewOutfits />
    </div>
  )
}

export default SavedOutfitsPage