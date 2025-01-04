import SearchBox from './components/SearchBox/SearchBox.jsx'
import InfoBox from './components/InfoBox/InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25,
        tempmax: 24,
        tempmin: 24,
        humidity: 52,
        feelslike: "amazing",
        weather: "cloudy",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather App</h1>
            <SearchBox upinfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}