import './weatherCard.css'

const WeatherCard = ({img, location, temp, condition}) => {
    return ( 
        <div className="container">
            <div className="weather-card">
                <h2 className="weather-city">{location}</h2>
                <img className="weather-icon" src={img} alt="" />
                <p className="weather-info">{`It is currently ${condition} and ${temp}\u00B0F in ${location}`}</p>
            </div>
        </div>
     );
}
 
export default WeatherCard;