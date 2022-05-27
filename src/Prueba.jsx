import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

function Prueba() {
    
    const apiKey = "9dccf6e71acad4d54bc32b9703baf19b";
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState({cityname: "", info: "", description: ""});
    const [displayCity, setdisplayCity] = useState(false);
    const [weatherIcon, setWeatherIcon] = useState(null);

    const searchCity = (e) =>{
          const currentCity = e.target.value;
          setCity(currentCity)
          
    }

    const displayWeather = ()=>{
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`).then((response)=>{
         console.log(response.data.weather[0].main)
         console.log(response.data.weather[0].description)
          
         setWeatherInfo({
            cityname: city,
            info: response.data.weather[0].main,
            description:response.data.weather[0].description

         })
         setdisplayCity(true);

         //Dynamic icons and backgrounds
        if (displayCity){
            if (weatherInfo.info === "clouds" ){
                setWeatherIcon("nube.png")
             } else if(weatherInfo.info === "clear sky"){
               setWeatherIcon("clear-sky.png")
             } else{
                console.log("ups") 
             }
            }
         })
      
       // <a href='https://www.freepik.com/vectors/night-illustration'>Night illustration vector created by upklyak - www.freepik.com</a>
       // <a href='https://www.freepik.com/vectors/winter-scene'>Winter scene vector created by katemangostar - www.freepik.com</a>
    }
 /* if(displayCity)
            if (weatherInfo.info === "Clouds"){
             setWeatherIcon("cloudy")
            }else if (weatherInfo.info === "Clear"){
             setWeatherIcon("clear-sky")
            }else if(weatherInfo.info === "Snow"){
              setWeatherIcon("snowy")
            }else if(weatherInfo.info === "Rain"){
              setWeatherIcon("rainy")
            }else if(weatherInfo.info === "Snow"){
              setWeatherIcon("snowy")
            }else if(weatherInfo.info === "Drizzle"){
              setWeatherIcon("drizzle")
            }else if(weatherInfo.info === "Thunderstorm"){
              setWeatherIcon("thunderstorm")
            }else{
              setWeatherIcon("mist")
            }*/

       
/*`background ${weatherIcon === "clear-sky" ? 'clear': ""}${weatherIcon === "cloudy" ? 'snow' : ''}`*/
  return (
    <body className='background'>
        <div className='container'>
           <div className='search-container'>
              <input className= "search-button" type="search" onChange={searchCity} value = {city}/>
              <button onClick={displayWeather}>
                 <i className="fas fa-search"></i>
               </button>
           </div>
           <div className='card-container'>
              <div className='card'>
              <img src={require(`./img/${weatherIcon}.png'`)} alt="" />
              </div>
           </div>
       </div>
    </body>
  )
}

export default Prueba