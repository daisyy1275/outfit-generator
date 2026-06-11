import {useState} from 'react'


function WadrobeForm(){
    const [cloth, updateCloth] = useState("");
    const [category, updateCategory] = useState("");
    const [occasion, updateOccasion] = useState("");
    const [temp, updateTemp] = useState("");

    function handleClick(){
        const clothes = {cloth, category, occasion, temp}
        const existing = JSON.parse(localStorage.getItem("wardrobe")) || [];
        existing.push(clothes);
        localStorage.setItem("wardrobe", JSON.stringify(existing));

    }

    return (
    <div id="wadrobe">
    <input value={cloth} onChange={(e) => updateCloth(e.target.value)} placeholder="Item name" />
    <select value={category} onChange={(e) => updateCategory(e.target.value)}>
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
      <option value="shoes">shoes</option>
      <option value="jacket">jacket</option>
      <option value="dress">dress</option>
    </select>
    <select value={occasion} onChange={(e) => updateOccasion(e.target.value)}>
      <option value="casual">casual</option>
      <option value="formal">formal</option>
      <option value="workout">workout</option>
      <option value="nightout">nightout</option>
    </select>
    
    <select value={temp} onChange={(e) => updateTemp(e.target.value)}>
     <option value="cold">Cold (below 10°C)</option>
     <option value="mild">Mild (10-19°C)</option>
     <option value="warm">Warm (20-25°C)</option>
     <option value="hot">Hot (above 25°C)</option>
    </select>



    <button onClick={handleClick}>submit</button>
    </div>
)
}
export default WadrobeForm