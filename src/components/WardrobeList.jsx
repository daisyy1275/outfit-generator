import { useState } from 'react'

function WardrobeList() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("wardrobe")) || []);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? items : items.filter(item => item.category === filter || item.occasion === filter);

  function clearWardrobe() {
  localStorage.removeItem("wardrobe");
  setItems([]);
  }

  return (
    <div className="card">
      <h3>👚 My Wardrobe</h3>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
        <button onClick={() => setFilter("all")} className={filter === "all" ? "occasion-active" : "occasion-btn"}>All</button>
        <button onClick={() => setFilter("top")} className={filter === "top" ? "occasion-active" : "occasion-btn"}>Tops</button>
        <button onClick={() => setFilter("bottom")} className={filter === "bottom" ? "occasion-active" : "occasion-btn"}>Bottoms</button>
        <button onClick={() => setFilter("dress")} className={filter === "dress" ? "occasion-active" : "occasion-btn"}>Dresses</button>
        <button onClick={() => setFilter("shoes")} className={filter === "shoes" ? "occasion-active" : "occasion-btn"}>Shoes</button>
        <button onClick={() => setFilter("jacket")} className={filter === "jacket" ? "occasion-active" : "occasion-btn"}>Jackets</button>
        <button onClick={() => setFilter("casual")} className={filter === "casual" ? "occasion-active" : "occasion-btn"}>Casual</button>
        <button onClick={() => setFilter("formal")} className={filter === "formal" ? "occasion-active" : "occasion-btn"}>Formal</button>
        <button onClick={() => setFilter("workout")} className={filter === "workout" ? "occasion-active" : "occasion-btn"}>Workout</button>
        <button onClick={() => setFilter("nightout")} className={filter === "nightout" ? "occasion-active" : "occasion-btn"}>Night Out</button>
      </div>
      {filtered.length === 0 && <p>No items found!</p>}
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
        {filtered.map((item, index) => (
          <div key={index} className="outfit-item">
            <span className="item-label">{item.category?.toUpperCase()}</span>
            <p>{item.cloth}</p>
            <span style={{fontSize: '11px', color: '#c77dff'}}>{item.occasion} · {item.temp}</span>
          </div>
        ))}
        <button onClick={clearWardrobe}>Clear Wardrobe 🗑️</button>
      </div>
    </div>
  )
}

export default WardrobeList