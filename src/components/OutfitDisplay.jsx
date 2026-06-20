import SmallModal from './SmallModal';
import { useState } from 'react'
import { mixture } from  '../utils/generateOutfit'
function OutfitDisplay({chosenFit, temp, onReset}){
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
        onReset();
    }
    return (
  <div className="card">
    <h3>👗 Your Outfit</h3>
    {chosenFit.dress 
      ? <div className="outfit-item"><span className="item-label">DRESS</span><p>{chosenFit.dress.cloth}</p></div>
      : <div>
          {chosenFit.top ? 
            <div className="outfit-item"><span className="item-label">TOP</span><p>{chosenFit.top.cloth}</p></div>
            : <div>
                <p>No top found! Choose what to do:</p>
                <button onClick={() => setOpenModal("top")}>Add to my wardrobe</button>
                <a href="https://www.asos.com/search/?q=top" target="_blank">Shop for it</a>
                <button onClick={() => setExtraTop(mixture("top"))}>Pick from my wardrobe</button>
              </div>
          }
          {chosenFit.bottom ? 
            <div className="outfit-item"><span className="item-label">BOTTOM</span><p>{chosenFit.bottom.cloth}</p></div>
            : <div>
                <p>No bottom found! Choose what to do:</p>
                <button onClick={() => setOpenModal("bottom")}>Add to my wardrobe</button>
                <a href="https://www.asos.com/search/?q=bottoms" target="_blank">Shop for it</a>
                <button onClick={() => setExtraBottom(mixture("bottom"))}>Pick from my wardrobe</button>
              </div>
          }
        </div>
    }
    {chosenFit.shoes ? 
      <div className="outfit-item"><span className="item-label">SHOES</span><p>{chosenFit.shoes.cloth}</p></div>
      : <div>
          <p>No shoes found! Choose what to do:</p>
          <button onClick={() => setOpenModal("shoes")}>Add to my wardrobe</button>
          <a href="https://www.asos.com/search/?q=shoes" target="_blank">Shop for it</a>
          <button onClick={() => setExtraShoes(mixture("shoes"))}>Pick from my wardrobe</button>
        </div>
    }
    {temp < 17 && (
      chosenFit.jacket 
        ? <div className="outfit-item"><span className="item-label">JACKET</span><p>{chosenFit.jacket.cloth}</p></div>
        : <p>🧥 It's chilly out, you might want a jacket — add one to your wardrobe!</p>
    )}
    {extraTop && <div className="outfit-item"><span className="item-label">ALTERNATIVE TOP</span><p>{extraTop.cloth}</p></div>}
    {extraBottom && <div className="outfit-item"><span className="item-label">ALTERNATIVE BOTTOM</span><p>{extraBottom.cloth}</p></div>}
    {extraShoes && <div className="outfit-item"><span className="item-label">ALTERNATIVE SHOES</span><p>{extraShoes.cloth}</p></div>}
    <button onClick={handleOutfitSave}>Save this outfit ❤️</button>
    {openModal && <SmallModal category={openModal} onClose={() => setOpenModal(null)} />}
    <button onClick={onReset}>🔄 Choose another outfit</button>
  </div>
)
   
}
            export default OutfitDisplay