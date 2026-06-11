function weatherDisplay({weather}){
    const temp = weather.current_weather.temperature

    function getMessage(temp){
        if (temp < 10){
           return "its cold today, you need to wrap up!!!!"
        }else if(temp >= 10 && temp <= 19 ){
           return "it is not freezing but you still may be cold"
        }else if(temp >= 20 && temp <= 25){
          return "its time to wear your cute summer outfits"
        } else{
          return "you better put sunscreen on "
        }
    }
    const message = getMessage(temp)
    return (
    <div>
     <h2>{temp}°C</h2>
     <p>{message}</p>
    </div>
)
}
export default weatherDisplay