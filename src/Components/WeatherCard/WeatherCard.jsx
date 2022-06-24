import './weatherCard.css'

const WeatherCard = ({img, location, temp, condition}) => {
    return ( 
        <div className="weather-card">
            <h2>{location}</h2>
            <img src={img} alt="" />
            <p className="weather-info">{`It is currently ${condition} and ${temp}\u00B0F in ${location}`}</p>
        </div>
     );
}
 
export default WeatherCard;