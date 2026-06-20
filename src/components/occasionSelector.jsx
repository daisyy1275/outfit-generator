function OccasionSelector({ occasion, updateOccasion, onGenerate}){
    return (
      <div className="card">
        <h3>👗 What's the vibe?</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
          <button onClick={() => updateOccasion("casual")} className={occasion === "casual" ? "occasion-active" : "occasion-btn"}>Casual</button>
          <button onClick={() => updateOccasion("formal")} className={occasion === "formal" ? "occasion-active" : "occasion-btn"}>Formal</button>
          <button onClick={() => updateOccasion("workout")} className={occasion === "workout" ? "occasion-active" : "occasion-btn"}>Workout</button>
          <button onClick={() => updateOccasion("nightout")} className={occasion === "nightout" ? "occasion-active" : "occasion-btn"}>Night Out</button>
       </div>
       <button onClick={onGenerate} style={{width: '100%', marginTop: '16px', fontSize: '16px', padding: '14px'}}>✨ Generate my outfit</button>
     </div>
)
    
}
export default OccasionSelector