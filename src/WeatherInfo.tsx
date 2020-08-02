import React from 'react'

export default function WeatherInfo(props: any) {
    let [temp,maxTemp,minTemp] :Array<string> = 
        [props.weatherInfo.main.temp,props.weatherInfo.main.temp_max,props.weatherInfo.main.temp_min]
    return (
        <div className='weatherInfo'>
            <ul>
                <li>Температура : ${temp}</li>
                <li>Максимальная температура : ${maxTemp}</li>
                <li>Минимальная температура : ${minTemp}</li>
                <li>`И еще что то`</li>
            </ul>
        </div>
    )
}