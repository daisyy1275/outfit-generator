function OccasionSelector({ occasion, updateOccasion }){
    
    return (
        <div>
        
        <select value={occasion} onChange={(e) => updateOccasion(e.target.value)}>
        <option value="casual">casual</option>
        <option value="formal">formal</option>
        <option value="workout">workout</option>
        <option value="nightout">nightout</option>
        </select>
        
        


        </div>
    )
}
export default OccasionSelector