import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

const WeatherForecast = ({ data }) => (
  <div className="weather">
    <WeatherIcon img={data.img} imgAlt={data.imgAlt} />
    <WeatherData day={data.day} conditions={data.conditions} time={data.time} />
  </div>
);

export default WeatherForecast;