import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoBox from './InfoBox';
import Alert from '@mui/material/Alert';

const Weather = () => {
    const [city, setcity] = useState("");

    const [update, setupdate] = useState({
        city : "City_Name",
        temp : 15,
        feels_like : 14,
        min_temp : 13,
        max_temp : 17,
        humidity : 42,
        sky : "clean",
        show : true
    })

    let Api_Url = "https://api.openweathermap.org/data/2.5/weather?";
    let Api_Key = "3b4a2eca44f0c08a45cce04bc35ccff4";

    async function apiCall(city){
      let response = await fetch(`${Api_Url}q=${city}&appid=${Api_Key}&units=metric`);
      let jsonFormat = await response.json();
     console.log(jsonFormat)
      let details = {
        city : jsonFormat.name,
        temp : jsonFormat.main.temp,
        feels_like : jsonFormat.main.feels_like,
        min_temp : jsonFormat.main.temp_min,
        max_temp : jsonFormat.main.temp_max,
        humidity : jsonFormat.main.humidity,
        sky : jsonFormat.weather[0].description,
        show : true
      }

      setupdate((prev)=>{
        return {...prev,...details}
      })
    }
    useEffect(()=>{
      apiCall('Bhubaneswar');
    },[])
    
    function trackValue(event){
        setcity(event.target.value);
    }
    function prevVal(event){
        event.preventDefault();
        apiCall(city);
        setcity('');
    }

  return (
    <>
    <h1>Know your Weather conditions Here!</h1>
    <form action="" onSubmit={prevVal}>
    <TextField label="Search City" id="standard-basic" variant="standard" required value={city} onChange={trackValue}/>
    <br /><br />
    <Button variant="contained" type='submit'>Search</Button>
    </form>
    <br />
    <Alert severity="info">Some City's data may not be accessed! Please Enter a valid City Name</Alert>
    <br />
    <div style={{display:"flex",justifyContent:"center"}}>
    <InfoBox detail={update}/>
    </div>
    </>
  )
}

export default Weather