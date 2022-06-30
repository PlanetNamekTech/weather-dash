import './weatherCard.css'

const WeatherCard = ({weather}) => {
    const { condition, feelslike_f } = weather.current;
    const {name} = weather.location;
    return ( 
        <div className="container">
            <div className="weather-card">
                <h2 className="weather-city">{name}</h2>
                <img className="weather-icon" src={condition.icon} alt="" />
                <p className="weather-info">{`It is currently ${condition.text.toLowerCase()} and ${feelslike_f}\u00B0F in ${name}`}</p>
            </div>
        </div>
     );
}
 
export default WeatherCard;