import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const WeatherContext = createContext();

export const WeatherState = (props) => {
  const [city, setCity] = useState("Kathmandu");
  const [wInfo, setWInfo] = useState({});
  function handleDate(time) {
    var date = "1475235770601";
    var d = new Date(parseInt(date, 10));
    var ds = d.toTimeString();
    const hour = parseInt(ds.substring(0, 2), 10);
    const min = parseInt(ds.substring(3, 5), 10);
    return (`${hour} : ${min}`);
  }
  async function refresh() {
    try {
      let response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=183d96102ce7ed547f6821e7d53efb51&units=metric"
      );
      var data = {
        temperature: response.data.main.feels_like,
        description: response.data.weather[0].main,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
        wind_speed: response.data.wind.speed,
        sunrise: handleDate(response.data.sys.sunrise),
        sunset: handleDate(response.data.sys.sunset),
      };
      setWInfo(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <WeatherContext.Provider value={{ state: wInfo, update: refresh }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
