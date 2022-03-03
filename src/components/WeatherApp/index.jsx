

import React, { useState } from 'react'
import { Container, Wrapper, Input, Box, StateLocation, DateLocation,Temp, Air, Sun, Cloud} from './style'

import sunny from '../../assets/images/sunny.jpg'
import cool from '../../assets/images/cool.jpg'


const api = {
    key: "9c9a983117cafd767eb530f58b5af53f",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
}

const Weather = () => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});


    const Search =(e)=>{
        if(e.key === 'Enter'){
            console.log('eldor');
            fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then((res)=>res.json())
            .then((result)=>{
                setWeather(result);
                // setQuery("");
                console.log(result);
            })

        }
    }

    

    const dateBuilder=(s)=>{
        
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];

        let days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        let day = days[s.getDay()];
        let date = s.getDate();
        let month = months[s.getMonth()];
        let year = s.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

  return (
    <Container bgImg={typeof weather.main != 'undefined' && weather.main.temp <= 0 ? cool : sunny} >
        <Wrapper>
            <Input placeholder={'Which country are you searching weather ... '} value={query} onChange={(e)=>setQuery(e.target.value)} onKeyPress={Search} />
            {
                (typeof weather.main != 'undefined') ? (
                    <Box>
                        <StateLocation>{weather.name} </StateLocation>
                        <DateLocation>{dateBuilder(new Date())}</DateLocation>
                        <Temp>{Math.round(weather.main.temp)} 'C</Temp>
                        {weather.main.temp >= 0 ? <Sun/> : <Cloud/>}
                        <Air color={weather.main.temp <= 0 ? 'aqua' : 'yellow'} >{weather.weather[0].main}</Air>
                    </Box>
                ) : ('')
            }
        </Wrapper>
    </Container>
  )
}

export default Weather