import "./current-weather.css"
import DateToday from "../time/time";

const CurrentWeather = ({data}) => {
    
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="date">{<DateToday />}</p>
                    <p className="city">{data.city}</p>
                </div>
                <div>
                    <p className="temperature">{Math.round(data.main.temp)}°F</p>
                </div>
            </div>
            <div className="middle">
                    <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.svg`} />
                    <p className="weather-description">{data.weather[0].description}</p>
            </div>

            <div className="bottom">
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label-title">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value"> {Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value"> {data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value"> {data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value"> {data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;