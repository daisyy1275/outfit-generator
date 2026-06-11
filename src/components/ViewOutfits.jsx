import { useState } from 'react'
function ViewOutfits(){
    const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("savedOutfits")) || []);
        
        function clearSaved(){

            localStorage.removeItem("savedOutfits");
            setSaved([]);
        }
        return (
            <div>
                <h2>Saved Outfits</h2>
                {saved.map((outfit, index) => (
                <div key={index}>
                    <h3>Outfit {index + 1}</h3>
                    {outfit.top && <p>Top: {outfit.top.cloth}</p>}
                    {outfit.bottom && <p>Bottom: {outfit.bottom.cloth}</p>}
                    {outfit.dress && <p>Dress: {outfit.dress.cloth}</p>}
                    {outfit.shoes && <p>Shoes: {outfit.shoes.cloth}</p>}
                    {outfit.jacket && <p>Jacket: {outfit.jacket.cloth}</p>}
                </div>
                ))}
                <button onClick={clearSaved}>Clear All Saved Outfits 🗑️</button>
            </div>
            )
    }
export default ViewOutfits