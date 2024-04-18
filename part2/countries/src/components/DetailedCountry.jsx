import { useState,useEffect } from "react";
import weatherService from "../services/weatherService";



const DetailedCountry = ({country}) => {

    const c = country[0];
    const capital = country[0].capital

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService
        .getWeather(capital)
        .then(w => {
            setWeather(w)
        })
    }, [])

//     <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />           
if(weather){
    console.log(weather)
}


    return(
        <div>
            <h1>{c.name.common}</h1>
            <p>capital {capital}</p>
            <p>area {c.area}</p>
            <h2>Languages:</h2>
            <ul>
            {Object.entries(c.languages).map(([code, name]) => (
            <li key={code}>{name}</li>
            ))}
            </ul>
            <p><img src={c.flags.png} alt={c.flags.alt} /></p>
            <div>{weather != null ?
            <div>
                <h2>Weather in {capital}</h2>
                <p>temperature: {Math.floor(weather.main.temp - 273)} Celsius</p>
                <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <p>wind {weather.wind.speed} m/s</p>
            </div>
            :
            <p>loading</p>
            }
            </div>
        </div>
    )

}

export default DetailedCountry