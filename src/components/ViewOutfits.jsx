import { useState } from 'react'
function ViewOutfits(){
    const [saved, setSaved] = useState(JSON.parse(localStorage.getItem("savedOutfits")) || []);
        
        function clearSaved(){

            localStorage.removeItem("savedOutfits");
            setSaved([]);
        }
        return (
            <div className="card">
               <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
               {saved.map((outfit, index) => (
                    <div key={index} className="card" style={{marginBottom: '16px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                        {outfit.top && <div className="outfit-item"><span className="item-label">TOP</span><p>{outfit.top.cloth}</p></div>}
                        {outfit.bottom && <div className="outfit-item"><span className="item-label">BOTTOM</span><p>{outfit.bottom.cloth}</p></div>}
                        {outfit.dress && <div className="outfit-item"><span className="item-label">DRESS</span><p>{outfit.dress.cloth}</p></div>}
                        {outfit.shoes && <div className="outfit-item"><span className="item-label">SHOES</span><p>{outfit.shoes.cloth}</p></div>}
                        {outfit.jacket && <div className="outfit-item"><span className="item-label">JACKET</span><p>{outfit.jacket.cloth}</p></div>}
                        </div>
                    </div>
                ))} 
                </div>
            
                <button onClick={clearSaved}>Clear All Saved Outfits 🗑️</button>
            </div>
            )
    }
export default ViewOutfits