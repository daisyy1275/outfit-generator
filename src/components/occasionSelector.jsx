function OccasionSelector({ occasion, updateOccasion, onGenerate}){
    return (
      <div className="card">
        <h3>👗 What's the occasion?</h3>
        <select value={occasion} onChange={(e) => updateOccasion(e.target.value)}>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="workout">Workout</option>
         <option value="nightout">Night Out</option>
        </select>
        <button onClick={onGenerate}>✨ Generate Outfit</button>
      </div>
)
    
}
export default OccasionSelector