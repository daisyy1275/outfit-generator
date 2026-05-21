import {useState} from 'react'


function WadrobeForm(){
    const [cloth, updateCloth] = useState("");
    const [category, updateCategory] = useState("");
    const [occasion, updateOccasion] = useState("");

    function handleClick(){
        const clothes = {cloth, category, occasion}
        const existing = JSON.parse(localStorage.getItem("wardrobe")) || [];
        existing.push(clothes);
        localStorage.setItem("wardrobe", JSON.stringify(existing));

    }

    return (
    <div>
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


    <button onClick={handleClick}>submit</button>
    </div>
)
}
export default WadrobeForm