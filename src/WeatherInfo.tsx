import React from 'react'

export default function WeatherInfo(props: any) {
    let convert = (fahrenheit: string):number => {
        let celsuis: number = Number(fahrenheit)-273;
        return Math.floor(celsuis)
    }
    let [temp,maxTemp,minTemp] :Array<number> = 
        [convert(props.weatherInfo.main.temp),
        convert(props.weatherInfo.main.temp_max),
        convert(props.weatherInfo.main.temp_min)]
    return (
        <div className='weatherInfo'>
            <ul>
                <li>Температура : {temp} C</li>
                <li>Максимальная температура : {maxTemp} C</li>
                <li>Минимальная температура : {minTemp} C</li>
            </ul>
        </div>
    )
}