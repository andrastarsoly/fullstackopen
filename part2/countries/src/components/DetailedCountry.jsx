import { useState,useEffect } from "react";
import weatherService from "../services/weatherService";



const DetailedCountry = ({country}) => {

    const c = country[0];
    const capital = country[0].capital

    const [weather, setWeather] = useState('')

    useEffect(() => {
        weatherService
        .getWeather(capital)
        .then(w => {
            setWeather(w)
        })
    }, [])


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
            <div>
                <h2>Weather in {capital}</h2>

            </div>
        </div>
    )

}

export default DetailedCountry