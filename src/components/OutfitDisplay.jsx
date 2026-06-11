import SmallModal from './SmallModal';
import { useState } from 'react'
import { mixture } from  '../utils/generateOutfit'
function OutfitDisplay({chosenFit, temp}){
    const jacketPreffered = temp < 20;
    const showDress = chosenFit.dress ? true : false;
    const [openModal, setOpenModal] = useState(null);
    const [extraTop, setExtraTop] = useState(null);
    const [extraBottom, setExtraBottom] = useState(null);
    const [extraShoes, setExtraShoes] = useState(null);
    function addExtra(){
        document.getElementById("wardrobe").scrollIntoView()
    }
  function handleOutfitSave() {
        const finalOutfit = {
            top: chosenFit.top || extraTop,
            bottom: chosenFit.bottom || extraBottom,
            shoes: chosenFit.shoes || extraShoes,
            dress: chosenFit.dress,
            jacket: chosenFit.jacket
        };
        
        
        const existing = JSON.parse(localStorage.getItem("savedOutfits")) || [];
        existing.push(finalOutfit);
        localStorage.setItem("savedOutfits", JSON.stringify(existing));
    }
    return (
        <div>
                {chosenFit.dress 
        ? <h2>{chosenFit.dress.cloth}</h2>
        : <div>
            {chosenFit.top ? <h2>{chosenFit.top.cloth}</h2> : 
                <div>
                <p>No top found! Choose what to do:</p>
                <button onClick={() => setOpenModal("top")}>Add to my wardrobe</button>
                <a href="https://www.asos.com/search/?q=top" target="_blank">Shop for it</a>
                <button onClick={() => setExtraTop(mixture("top"))}>Pick from my wardrobe</button>
                </div>
            }
            {chosenFit.bottom ? <h2>{chosenFit.bottom.cloth}</h2> : 
                <div>
                <p>No bottom found! Choose what to do:</p>
                <button onClick={() => setOpenModal("bottom")}>Add to my wardrobe</button>
                <a href="https://www.asos.com/search/?q=bottoms" target="_blank">Shop for it</a>
                <button onClick={() => setExtraBottom(mixture("bottom"))}>Pick from my wardrobe</button>
                </div>
            }
            </div>
            }
            {chosenFit.shoes ? <h2>{chosenFit.shoes.cloth}</h2> : 
            <div>
                <p>No shoes found! Choose what to do:</p>
                <button onClick={() => setOpenModal("shoes")}>Add to my wardrobe</button>
                <a href="https://www.asos.com/search/?q=shoes" target="_blank">Shop for it</a>
                <button onClick={() => setExtraShoes(mixture("shoes"))}>Pick from my wardrobe</button>
            </div>
            }
    
             {extraTop && <h2>Alternative pick: {extraTop.cloth}</h2>}
             {extraBottom && <h2>Alternative bottom: {extraBottom.cloth}</h2>}
             {extraShoes && <h2>Alternative shoes: {extraShoes.cloth}</h2>}
             <button onClick={handleOutfitSave}>Save this outfit </button>
            </div>
    )
}
            export default OutfitDisplay