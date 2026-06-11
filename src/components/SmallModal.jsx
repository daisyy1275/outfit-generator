
import { useState } from 'react'
function SmallModal({category, onClose}){
    const [cloth, UpdateCloth] = useState("")
    const [occasion, UpdateOccasion] = useState("")
    const [temp, Updatetemp] = useState("")

    function handleSubmit() {
        const item = { cloth, category, occasion, temp };
        const existing = JSON.parse(localStorage.getItem("wardrobe")) || [];
        existing.push(item);
        localStorage.setItem("wardrobe", JSON.stringify(existing));
        onClose();
    }

    return (
  <div>
    <h2>Add a {category}</h2>
    <input value={cloth} onChange={(e) => UpdateCloth(e.target.value)} placeholder="Item name" />
    <select value={occasion} onChange={(e) => UpdateOccasion(e.target.value)}>
      <option value="casual">Casual</option>
      <option value="formal">Formal</option>
      <option value="workout">Workout</option>
      <option value="nightout">Night Out</option>
    </select>
    <select value={temp} onChange={(e) => Updatetemp(e.target.value)}>
      <option value="cold">Cold</option>
      <option value="mild">Mild</option>
      <option value="warm">Warm</option>
      <option value="hot">Hot</option>
    </select>
    <button onClick={handleSubmit}>Add</button>
    <button onClick={onClose}>Close</button>
  </div>
)
} 

export default SmallModal