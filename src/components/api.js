import axios from 'axios';
/*
feels_like: 282.3
humidity: 83
pressure: 1013
temp: 282.3
temp_max: 284.66
temp_min: 280.08
*/
let fahrenheit = temp => {
    const newTemp = (temp - 273.15) * (9/5) + 32;
    return newTemp;
}
let roundToTwo = num => +(Math.round(num + "e+2")  + "e-2");


let checkForSpaces = city =>  city.replace(/\s/g, "-");

const listOfID = {
    "new-york-city" : 5128581,
    "los-angeles" : 5368361,
    "tokyo" : 1850147
}
export default{
getCityID : async (city) =>{
    try{

        city = checkForSpaces(city).toLowerCase();
        return listOfID[city];
    }
    catch (err){
        console.log(err);
    }
},
getData : async (cityID) => {
    try{
        const key = 'f8020db1ec191700b820071328156a21';
        const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key);
        return resp;
    }
    catch (err){
        console.error(err);
    }
},

parseData : async (data) => {
    try{
        const temp = await roundToTwo(fahrenheit(data['data']['main']['temp']));
        const feelsLike = await roundToTwo(fahrenheit(data['data']['main']['feels_like']));
        const temp_max = await roundToTwo(fahrenheit(data['data']['main']['temp_max']));
        const temp_min = await roundToTwo(fahrenheit(data['data']['main']['temp_min']));

        return [  
            {id: "temperature", temperature:temp}, 
            {id: "feels like", temperature:feelsLike}, 
            {id: "max temperature", temperature:temp_max}, 
            {id: "min temperature", temperature : temp_min}
        ];
    }
    catch(err){
        console.log(err);
    }

},

}

