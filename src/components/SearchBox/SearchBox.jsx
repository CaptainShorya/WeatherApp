import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({upinfo}) {
    let [city,setCity] = useState("");
    let [error ,setError]  = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "ff546d2927bc59b7ea524a4358ad67f6";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let info ={
                city : jsonResponse.name,
                temp : jsonResponse.main.temp,
                tempmax : jsonResponse.main.temp_max,
                tempmin : jsonResponse.main.temp_min,
                humidity : jsonResponse.main.humidity,
                feelslike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description
            }
            console.log(info);
            return (info)
        } catch(err) {
            throw err
        }
        
    }

    let handelChange = (event) => {
        setCity(event.target.value)
    }

    let handelSubmit = async (event) => {
        try{
            event.preventDefault()
            console.log(city)
            setCity("")
            let newInfo = await getWeatherInfo();
            upinfo(newInfo);
        } catch(err) {
            setError(true)
        }
        
    }
  return (
    <div className="Search">
      <form onSubmit={handelSubmit}>
        <TextField id="city" label="City-Name" variant="outlined" required value={city} onChange={handelChange}/>
        <br />
        <br />
        <Button variant="contained" type="Submit">Search</Button>
        {error && <p style={{color:"red"}}>No such place Exists</p>}
      </form>
    </div>
  );
}
