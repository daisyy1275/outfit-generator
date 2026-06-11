function getTemperature(temp){
    if (temp < 10){
        return "cold"
    }else if(temp >= 10 && temp <= 19 ){
        return "mild"
    }else if(temp >= 20 && temp <= 25){
        return "warm"
    } else{
        return "hot"
    }
}
function generate(occasion, temp){
    const Temp = getTemperature(temp);
    const wadrobe =  JSON.parse(localStorage.getItem("wardrobe")) || [];
    const outfit = wadrobe.filter(robe => robe.occasion == occasion && robe.temp === Temp)
    const top = outfit.filter(robe => robe.category === "top")
    const bottom = outfit.filter(robe => robe.category === "bottom")
    const dress = outfit.filter(robe => robe.category === "dress")
    const shoes = outfit.filter(robe => robe.category === "shoes")
    const jacket = outfit.filter(robe => robe.category === "jacket")

    const pickedTop = top[Math.floor(Math.random() * top.length)]
    const pickedbottom = bottom[Math.floor(Math.random() * bottom.length)]
    const pickeddress = dress[Math.floor(Math.random() * dress.length)]
    const pickedshoes = shoes[Math.floor(Math.random() * shoes.length)]
    const pickedjacket = jacket[Math.floor(Math.random() * jacket.length)]


    return {
     top: pickedTop,
     bottom: pickedbottom,
     dress: pickeddress,
     shoes: pickedshoes,
     jacket: pickedjacket
    }
}
function mixture(category){
    const wardrobe =  JSON.parse(localStorage.getItem("wardrobe")) || [];
    const cate = wardrobe.filter(item => item.category === category)
    if (cate.length === 0) return null
    const pickedItem = cate[Math.floor(Math.random() * cate.length)]

    return pickedItem;
}


export default generate
export { mixture }