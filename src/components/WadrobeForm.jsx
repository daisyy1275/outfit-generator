import {useState} from 'react'


function WadrobeForm(){
    const [cloth, updateCloth] = useState("");
    const [category, updateCategory] = useState("top");
    const [occasion, updateOccasion] = useState("casual");
    const [temp, updateTemp] = useState("cold");

    function handleClick(){
        const clothes = {cloth, category, occasion, temp}
        const existing = JSON.parse(localStorage.getItem("wardrobe")) || [];
        existing.push(clothes);
        localStorage.setItem("wardrobe", JSON.stringify(existing));

    }

    return (
  <div className="card" id="wardrobe">
    <h3>👚 Add to Wardrobe</h3>
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px'}}>
      <input value={cloth} onChange={(e) => updateCloth(e.target.value)} placeholder="Item name..." />
      <select value={category} onChange={(e) => updateCategory(e.target.value)}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="shoes">Shoes</option>
        <option value="jacket">Jacket</option>
        <option value="dress">Dress</option>
      </select>
      <select value={occasion} onChange={(e) => updateOccasion(e.target.value)}>
        <option value="casual">Casual</option>
        <option value="formal">Formal</option>
        <option value="workout">Workout</option>
        <option value="nightout">Night Out</option>
      </select>
      <select value={temp} onChange={(e) => updateTemp(e.target.value)}>
        <option value="cold">Cold</option>
        <option value="mild">Mild</option>
        <option value="warm">Warm</option>
        <option value="hot">Hot</option>
      </select>
      <button onClick={handleClick}>+ Add</button>
    </div>
  </div>
)
}
export default WadrobeForm