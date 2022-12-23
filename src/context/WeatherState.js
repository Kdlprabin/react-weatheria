import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const WeatherContext = createContext();

export const WeatherState = (props) => {
  const [city, setCity] = useState("Kathmandu");
  const [wInfo, setWInfo] = useState({});
  function handleDate(time) {
    var date = "1475235770601";
    var d = new Date(parseInt(date, 10));
    var ds = d.toString("MM/dd/yy HH:mm:ss");
    console.log(ds);
  }
  async function refresh() {
    let response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=43aa310cf040eb7a9bc888de93a2c9dc&units=metric"
    );
    var data = {
      temperature: response.data.main.feels_like,
      description: response.data.weather[0].main,
      temp_min: response.data.main.temp_min,
      temp_max: response.data.main.temp_max,
      wind_speed: response.data.wind.speed,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    };
    setWInfo(data);
  }
  return (
    <WeatherContext.Provider value={{ state: wInfo, update: refresh }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
